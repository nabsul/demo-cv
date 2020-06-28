const { statSync } = require('fs')
const { exec } = require("child_process");

const delay = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout((err) => {
            if (err) {
                return reject(error)
            }
            resolve()
        }, sec * 1000)
    })
}

const runAsync = () => {
    return new Promise((resolve, reject) => {
        exec('pdflatex NabeelSuliemanCV.tex', (error) => {
            if (error) {
                return reject(error)
            }
            resolve()
        })
    })
}

const runLoopAsync = async () => {
    let lastTime = 0
    while (true) {
        await delay(5)
        const newTime = statSync('NabeelSuliemanCV.tex').ctimeMs
        if (lastTime === newTime) continue
        console.log(`Change detected ${lastTime} != ${newTime}...`)
        lastTime = newTime
        await runAsync()
        console.log("Command execution complete.")
    }    
}

runLoopAsync()
.catch(console.log)
