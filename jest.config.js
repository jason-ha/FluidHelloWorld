/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    preset: "jest-puppeteer",
    globals: {
        PATH: `http://localhost:8080`,
    },
    reporters: ["jest-junit"],
    verbose: true,
};
