"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSuggestionFlow = void 0;
const ai_1 = require("@genkit-ai/ai");
const core_1 = require("@genkit-ai/core");
const flow_1 = require("@genkit-ai/flow");
const googleai_1 = require("@genkit-ai/googleai");
const z = __importStar(require("zod"));
const googleai_2 = require("@genkit-ai/googleai");
(0, core_1.configureGenkit)({
    plugins: [
        (0, googleai_2.googleAI)(),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});
exports.menuSuggestionFlow = (0, flow_1.defineFlow)({
    name: 'menuSuggestionFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
}, async (subject) => {
    const llmResponse = await (0, ai_1.generate)({
        prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
        model: googleai_1.geminiPro,
        config: {
            temperature: 1,
        },
    });
    return llmResponse.text();
});
(0, flow_1.startFlowsServer)();
//# sourceMappingURL=index.js.map