const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")

module.exports = (phase, {defaultConfig}) => {
    
    console.log(defaultConfig)

    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            defaultConfig,
            env: {
                api: "http://localhost"
            }
        }
    }
}