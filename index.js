totalColSpan = 1
colLayoutCount = 1
itemsColCount = 1
itemsRowCount = 1
totalPage = 1
currentPage = 1
itemsPerPage = 1
keys = []
itemDataLabels = undefined

function getTableHeader(header) {
    return `<thead>
                <tr style="background: ${header.color}">
                    <th class="table-header" colspan="${totalColSpan}">${header.title}</th>
                </tr>
            </thead>`
}

function getTableSubHeader(subHeaders) {
    let output = ''
    subHeaders.forEach(subHeader => {
        output += `<tr><td class="sub-header" colspan="${totalColSpan}">${subHeader.text}</td></tr>`
    })
    return output
}

function getFooter(footer, page) {
    if (footer !== false) {
        let format = footer.format || 'Page [current-page] / [total-page]'
        format = format.replace('[current-page]', page.currentPage).replace('[total-page]', page.totalPage)
        return `<tr><td class="footer" colspan="${totalColSpan}">${format}</td></tr>`
    }
    return ''
}

function getTableContents(content, currentPage) {
    let output = ''

    if (content.colLayoutTitle) {
        output += '<tr>'
        for (let x = 0; x < colLayoutCount; ++x) {
            output += `<td class="col-group-title" colspan="${itemsColCount}">${content.colLayoutTitle}</td>`
        }
        output += '</tr>'
    }

    if (itemDataLabels) {
        console.log('itemDataLabels', itemDataLabels)
        output += '<tr>'
        for (let y = 0; y < colLayoutCount; ++y) {
            for (let z = 0; z < itemsColCount; ++z) {
                if (itemDataLabels[z]) {
                    output += `<td class="item-data-label" colspan="${1}">${itemDataLabels[z]}</td>`
                } else {
                    output += `<td class="item-data-label"></td>`
                }
            }
        }
        output += '</tr>'
    }

    let allData = content.items
    for (let x = 0; x < itemsRowCount; ++x) {
        output += '<tr>'
        for (let y = 0; y < colLayoutCount; ++y) {
            const a = x + (y * itemsRowCount) + ((currentPage - 1) * itemsPerPage)
            for (let z = 0; z < itemsColCount; ++z) {
                if (allData[a]) {
                    output += `<td class="items" colspan="${1}">${allData[a][keys[z]]}</td>`
                } else {
                    output += `<td class="items"></td>`
                }
            }
        }
        output += '</tr>'
    }
    return output
}

function generate(tableData, page = { currentPage: 1, totalPage: 1 }) {
    return `<table>
                ${getTableHeader(tableData.header)}
                <tbody>
                    ${getTableSubHeader(tableData.subHeaders)}
                    ${getTableContents(tableData.content, page.currentPage)}
                    ${getFooter(tableData.footer, page)}
                </tbody>
            </table>`
}

const tableGenerator = {

    generateTable(tableData, page) {
        let output = ''

        itemsRowCount = tableData.content.itemsRowCount
        colLayoutCount = tableData.content.colLayoutCount
        itemsColCount = typeof tableData.content.itemData !== 'undefined' ? tableData.content.itemData.length : Object.keys(tableData.content.items[0]).length
        totalColSpan = colLayoutCount * itemsColCount
        itemsPerPage = colLayoutCount * itemsRowCount

        keys = Object.keys(tableData.content.items[0])
        const itemData = tableData.content.itemData
        if (itemData) {
            if (typeof itemData[0] === 'object') {
                keys = itemData.map((itemData) => { return itemData.value })
                itemDataLabels = itemData.map((itemData) => { return itemData.label })
            } else {
                keys = itemData
            }
        }

        totalPage = Math.ceil(tableData.content.items.length / itemsPerPage)

        if (!page) {
            for (let currentPage = 1; currentPage <= totalPage; ++currentPage) {
                output += generate(tableData, { currentPage, totalPage })
            }
        } else {
            output += generate(tableData, { currentPage: page, totalPage })
        }

        return output
    },

}

module.exports = tableGenerator
