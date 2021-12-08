function domain(url) {
    return url.replace(/(http:|www.|https:|[/])/gm, "").split('.')[0]  
}

module.exports = {domain}
