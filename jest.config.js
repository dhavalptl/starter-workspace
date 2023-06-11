export default {
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                jsc: {
                    target: "es2021",
                    "transform": {
                        "react": {
                            "runtime": "automatic"
                        }
                    },
                },
            },
        ],
    },
}