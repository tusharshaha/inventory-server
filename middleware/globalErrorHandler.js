const globalErrorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: err.message
    })
}

module.exports = globalErrorHandler;