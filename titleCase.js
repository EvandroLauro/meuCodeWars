function titleCase(title, minorWords = '') {
    if (title == '') {
        return title
    } else {
        let t = title.toLowerCase()
        let m = minorWords.toLowerCase()
        var listTitle = t.split(" ")
        let listMinorWords = m.split(" ")
        let list = []
        for (let i = 0; i < listTitle.length; i++) {
            let str = ''
            if (i == 0) {
                str = listTitle[i][0].toUpperCase() + listTitle[i].substr(1)
            } else {
                str = listMinorWords.find(element => element == listTitle[i])
            }
            if (str == undefined) {
                str =listTitle[i][0].toUpperCase() + listTitle[i].substr(1)
            }
            list.push(str)
        }
        return list.toString().replace(/,/g, " ")
    }
}

module.exports = {titleCase}