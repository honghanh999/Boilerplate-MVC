const renderJson = (data = {}, status = true, code = 200, message = 'success') => {
    return {
        status,
        code,
        message,
        data
    }
}

module.exports = {
    renderJson
}