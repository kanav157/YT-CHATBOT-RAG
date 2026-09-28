/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ingest/route";
exports.ids = ["app/api/ingest/route"];
exports.modules = {

/***/ "(rsc)/./app/api/ingest/route.ts":
/*!*********************************!*\
  !*** ./app/api/ingest/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/youtube */ \"(rsc)/./lib/youtube.ts\");\n/* harmony import */ var _lib_rag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/rag */ \"(rsc)/./lib/rag.ts\");\n\n\n\nconst runtime = \"nodejs\";\nasync function POST(req) {\n    try {\n        const { url } = await req.json();\n        const videoId = (0,_lib_youtube__WEBPACK_IMPORTED_MODULE_1__.extractVideoId)(url ?? \"\");\n        if (!videoId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"That doesn't look like a YouTube link.\"\n            }, {\n                status: 400\n            });\n        }\n        const transcript = await (0,_lib_youtube__WEBPACK_IMPORTED_MODULE_1__.fetchTranscript)(videoId);\n        if (!transcript) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No transcript found for this video.\"\n            }, {\n                status: 404\n            });\n        }\n        const chunks = await (0,_lib_rag__WEBPACK_IMPORTED_MODULE_2__.indexTranscript)(videoId, transcript);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            videoId,\n            chunks,\n            characters: transcript.length\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e?.message?.includes(\"disabled\") ? \"This video has transcripts turned off.\" : e?.message ?? \"Ingest failed.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2luZ2VzdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNxQjtBQUNwQjtBQUVyQyxNQUFNSSxVQUFVLFNBQVM7QUFFekIsZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBQzlCLE1BQU1DLFVBQVVSLDREQUFjQSxDQUFDTSxPQUFPO1FBQ3RDLElBQUksQ0FBQ0UsU0FBUztZQUNaLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVFLE9BQU87WUFBeUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzlGO1FBQ0EsTUFBTUMsYUFBYSxNQUFNViw2REFBZUEsQ0FBQ087UUFDekMsSUFBSSxDQUFDRyxZQUFZO1lBQ2YsT0FBT1oscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUFzQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0Y7UUFDQSxNQUFNRSxTQUFTLE1BQU1WLHlEQUFlQSxDQUFDTSxTQUFTRztRQUM5QyxPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDO1lBQVNJO1lBQVFDLFlBQVlGLFdBQVdHLE1BQU07UUFBQztJQUM1RSxFQUFFLE9BQU9DLEdBQVE7UUFDZixPQUFPaEIscURBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUUsT0FBT00sR0FBR0MsU0FBU0MsU0FBUyxjQUFjLDJDQUEyQ0YsR0FBR0MsV0FBVztRQUFpQixHQUN0SDtZQUFFTixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxnYXJna1xcRG93bmxvYWRzXFx5dC1yYWdcXHl0LXJhZ1xcYXBwXFxhcGlcXGluZ2VzdFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBleHRyYWN0VmlkZW9JZCwgZmV0Y2hUcmFuc2NyaXB0IH0gZnJvbSBcIkAvbGliL3lvdXR1YmVcIjtcbmltcG9ydCB7IGluZGV4VHJhbnNjcmlwdCB9IGZyb20gXCJAL2xpYi9yYWdcIjtcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB2aWRlb0lkID0gZXh0cmFjdFZpZGVvSWQodXJsID8/IFwiXCIpO1xuICAgIGlmICghdmlkZW9JZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVGhhdCBkb2Vzbid0IGxvb2sgbGlrZSBhIFlvdVR1YmUgbGluay5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2NyaXB0ID0gYXdhaXQgZmV0Y2hUcmFuc2NyaXB0KHZpZGVvSWQpO1xuICAgIGlmICghdHJhbnNjcmlwdCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm8gdHJhbnNjcmlwdCBmb3VuZCBmb3IgdGhpcyB2aWRlby5cIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cbiAgICBjb25zdCBjaHVua3MgPSBhd2FpdCBpbmRleFRyYW5zY3JpcHQodmlkZW9JZCwgdHJhbnNjcmlwdCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdmlkZW9JZCwgY2h1bmtzLCBjaGFyYWN0ZXJzOiB0cmFuc2NyaXB0Lmxlbmd0aCB9KTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZT8ubWVzc2FnZT8uaW5jbHVkZXMoXCJkaXNhYmxlZFwiKSA/IFwiVGhpcyB2aWRlbyBoYXMgdHJhbnNjcmlwdHMgdHVybmVkIG9mZi5cIiA6IGU/Lm1lc3NhZ2UgPz8gXCJJbmdlc3QgZmFpbGVkLlwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZXh0cmFjdFZpZGVvSWQiLCJmZXRjaFRyYW5zY3JpcHQiLCJpbmRleFRyYW5zY3JpcHQiLCJydW50aW1lIiwiUE9TVCIsInJlcSIsInVybCIsImpzb24iLCJ2aWRlb0lkIiwiZXJyb3IiLCJzdGF0dXMiLCJ0cmFuc2NyaXB0IiwiY2h1bmtzIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImUiLCJtZXNzYWdlIiwiaW5jbHVkZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ingest/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/rag.ts":
/*!********************!*\
  !*** ./lib/rag.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answer: () => (/* binding */ answer),\n/* harmony export */   chunkText: () => (/* binding */ chunkText),\n/* harmony export */   indexTranscript: () => (/* binding */ indexTranscript),\n/* harmony export */   retrieve: () => (/* binding */ retrieve)\n/* harmony export */ });\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n\nconst ai = new _google_genai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenAI({\n    apiKey: process.env.GEMINI_API_KEY\n});\nconst EMBED_MODEL = \"gemini-embedding-001\";\nconst CHAT_MODEL = \"gemini-3.8-flash\";\n// In-memory vector store, keyed by videoId. Survives hot reloads in dev.\n// For production, replace with pgvector / Pinecone / Qdrant.\nconst g = globalThis;\nconst store = g.__vstore ??= new Map();\n// 1. Chunking: ~1000 chars with 200 overlap, cut on word boundaries.\nfunction chunkText(text, size = 1000, overlap = 200) {\n    const chunks = [];\n    let start = 0;\n    while(start < text.length){\n        let end = Math.min(start + size, text.length);\n        if (end < text.length) {\n            const lastSpace = text.lastIndexOf(\" \", end);\n            if (lastSpace > start + size / 2) end = lastSpace;\n        }\n        chunks.push(text.slice(start, end).trim());\n        if (end >= text.length) break;\n        start = Math.max(end - overlap, start + 1);\n    }\n    return chunks.filter(Boolean);\n}\nasync function embed(texts, taskType) {\n    const out = [];\n    for(let i = 0; i < texts.length; i += 100){\n        const res = await ai.models.embedContent({\n            model: EMBED_MODEL,\n            contents: texts.slice(i, i + 100),\n            config: {\n                taskType\n            }\n        });\n        out.push(...res.embeddings.map((d)=>d.values));\n    }\n    return out;\n}\n// 3. Vectorize + store\nasync function indexTranscript(videoId, transcript) {\n    const texts = chunkText(transcript);\n    const vectors = await embed(texts, \"RETRIEVAL_DOCUMENT\");\n    store.set(videoId, texts.map((text, i)=>({\n            text,\n            embedding: vectors[i]\n        })));\n    return texts.length;\n}\n// OpenAI embeddings are unit-length, so dot product == cosine similarity.\nconst dot = (a, b)=>a.reduce((s, v, i)=>s + v * b[i], 0);\n// 4. Retrieve top-k chunks for a question\nasync function retrieve(videoId, question, k = 5) {\n    const chunks = store.get(videoId);\n    if (!chunks) return null;\n    const [q] = await embed([\n        question\n    ], \"RETRIEVAL_QUERY\");\n    return chunks.map((c)=>({\n            text: c.text,\n            score: dot(q, c.embedding)\n        })).sort((a, b)=>b.score - a.score).slice(0, k);\n}\n// 5. Answer with retrieved context\nasync function answer(question, context, history = []) {\n    const h = history.slice(-6);\n    while(h.length && h[0].role !== \"user\")h.shift();\n    const res = await ai.models.generateContent({\n        model: CHAT_MODEL,\n        contents: [\n            ...h.map((m)=>({\n                    role: m.role === \"assistant\" ? \"model\" : \"user\",\n                    parts: [\n                        {\n                            text: m.content\n                        }\n                    ]\n                })),\n            {\n                role: \"user\",\n                parts: [\n                    {\n                        text: question\n                    }\n                ]\n            }\n        ],\n        config: {\n            temperature: 0.2,\n            systemInstruction: \"You answer questions about a YouTube video using only the transcript excerpts below. \" + \"If the answer is not in the excerpts, say the video doesn't cover it. Be concise.\\n\\n\" + context.map((c, i)=>`[Excerpt ${i + 1}]\\n${c}`).join(\"\\n\\n\")\n        }\n    });\n    return res.text ?? \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdDLElBQU1BLEVBQUVVLEtBQUssR0FBR1gsRUFBRVcsS0FBSyxFQUNoQ3RDLEtBQUssQ0FBQyxHQUFHa0M7QUFDZDtBQUVBLG1DQUFtQztBQUM1QixlQUFlTSxPQUNwQlAsUUFBZ0IsRUFDaEJRLE9BQWlCLEVBQ2pCQyxVQUE2RCxFQUFFO0lBRS9ELE1BQU1DLElBQUlELFFBQVExQyxLQUFLLENBQUMsQ0FBQztJQUN6QixNQUFPMkMsRUFBRWxELE1BQU0sSUFBSWtELENBQUMsQ0FBQyxFQUFFLENBQUNDLElBQUksS0FBSyxPQUFRRCxFQUFFRSxLQUFLO0lBRWhELE1BQU1uQyxNQUFNLE1BQU1uQyxHQUFHb0MsTUFBTSxDQUFDbUMsZUFBZSxDQUFDO1FBQzFDakMsT0FBT2hDO1FBQ1BpQyxVQUFVO2VBQ0w2QixFQUFFMUIsR0FBRyxDQUFDLENBQUM4QixJQUFPO29CQUNmSCxNQUFNRyxFQUFFSCxJQUFJLEtBQUssY0FBYyxVQUFVO29CQUN6Q0ksT0FBTzt3QkFBQzs0QkFBRTVELE1BQU0yRCxFQUFFRSxPQUFPO3dCQUFDO3FCQUFFO2dCQUM5QjtZQUNBO2dCQUFFTCxNQUFNO2dCQUFRSSxPQUFPO29CQUFDO3dCQUFFNUQsTUFBTTZDO29CQUFTO2lCQUFFO1lBQUM7U0FDN0M7UUFDRGxCLFFBQVE7WUFDTm1DLGFBQWE7WUFDYkMsbUJBQ0UsMEZBQ0EsMEZBQ0FWLFFBQVF4QixHQUFHLENBQUMsQ0FBQ29CLEdBQUc1QixJQUFNLENBQUMsU0FBUyxFQUFFQSxJQUFJLEVBQUUsR0FBRyxFQUFFNEIsR0FBRyxFQUFFZSxJQUFJLENBQUM7UUFDM0Q7SUFDRjtJQUNBLE9BQU8xQyxJQUFJdEIsSUFBSSxJQUFJO0FBQ3JCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdhcmdrXFxEb3dubG9hZHNcXHl0LXJhZ1xceXQtcmFnXFxsaWJcXHJhZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5cbmNvbnN0IGFpID0gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSB9KTtcbmNvbnN0IEVNQkVEX01PREVMID0gXCJnZW1pbmktZW1iZWRkaW5nLTAwMVwiO1xuY29uc3QgQ0hBVF9NT0RFTCA9IFwiZ2VtaW5pLTMuOC1mbGFzaFwiO1xuXG50eXBlIENodW5rID0geyB0ZXh0OiBzdHJpbmc7IGVtYmVkZGluZzogbnVtYmVyW10gfTtcblxuLy8gSW4tbWVtb3J5IHZlY3RvciBzdG9yZSwga2V5ZWQgYnkgdmlkZW9JZC4gU3Vydml2ZXMgaG90IHJlbG9hZHMgaW4gZGV2LlxuLy8gRm9yIHByb2R1Y3Rpb24sIHJlcGxhY2Ugd2l0aCBwZ3ZlY3RvciAvIFBpbmVjb25lIC8gUWRyYW50LlxuY29uc3QgZyA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IF9fdnN0b3JlPzogTWFwPHN0cmluZywgQ2h1bmtbXT4gfTtcbmNvbnN0IHN0b3JlID0gKGcuX192c3RvcmUgPz89IG5ldyBNYXA8c3RyaW5nLCBDaHVua1tdPigpKTtcblxuLy8gMS4gQ2h1bmtpbmc6IH4xMDAwIGNoYXJzIHdpdGggMjAwIG92ZXJsYXAsIGN1dCBvbiB3b3JkIGJvdW5kYXJpZXMuXG5leHBvcnQgZnVuY3Rpb24gY2h1bmtUZXh0KHRleHQ6IHN0cmluZywgc2l6ZSA9IDEwMDAsIG92ZXJsYXAgPSAyMDApOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGNodW5rczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgd2hpbGUgKHN0YXJ0IDwgdGV4dC5sZW5ndGgpIHtcbiAgICBsZXQgZW5kID0gTWF0aC5taW4oc3RhcnQgKyBzaXplLCB0ZXh0Lmxlbmd0aCk7XG4gICAgaWYgKGVuZCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBsYXN0U3BhY2UgPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIFwiLCBlbmQpO1xuICAgICAgaWYgKGxhc3RTcGFjZSA+IHN0YXJ0ICsgc2l6ZSAvIDIpIGVuZCA9IGxhc3RTcGFjZTtcbiAgICB9XG4gICAgY2h1bmtzLnB1c2godGV4dC5zbGljZShzdGFydCwgZW5kKS50cmltKCkpO1xuICAgIGlmIChlbmQgPj0gdGV4dC5sZW5ndGgpIGJyZWFrO1xuICAgIHN0YXJ0ID0gTWF0aC5tYXgoZW5kIC0gb3ZlcmxhcCwgc3RhcnQgKyAxKTtcbiAgfVxuICByZXR1cm4gY2h1bmtzLmZpbHRlcihCb29sZWFuKTtcbn1cblxuLy8gMi4gRW1iZWRkaW5nIChiYXRjaGVkKVxudHlwZSBUYXNrID0gXCJSRVRSSUVWQUxfRE9DVU1FTlRcIiB8IFwiUkVUUklFVkFMX1FVRVJZXCI7XG5hc3luYyBmdW5jdGlvbiBlbWJlZCh0ZXh0czogc3RyaW5nW10sIHRhc2tUeXBlOiBUYXNrKTogUHJvbWlzZTxudW1iZXJbXVtdPiB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSArPSAxMDApIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhaS5tb2RlbHMuZW1iZWRDb250ZW50KHtcbiAgICAgIG1vZGVsOiBFTUJFRF9NT0RFTCxcbiAgICAgIGNvbnRlbnRzOiB0ZXh0cy5zbGljZShpLCBpICsgMTAwKSxcbiAgICAgIGNvbmZpZzogeyB0YXNrVHlwZSB9LFxuICAgIH0pO1xuICAgIG91dC5wdXNoKC4uLnJlcy5lbWJlZGRpbmdzIS5tYXAoKGQpID0+IGQudmFsdWVzISkpO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8vIDMuIFZlY3Rvcml6ZSArIHN0b3JlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5kZXhUcmFuc2NyaXB0KHZpZGVvSWQ6IHN0cmluZywgdHJhbnNjcmlwdDogc3RyaW5nKSB7XG4gIGNvbnN0IHRleHRzID0gY2h1bmtUZXh0KHRyYW5zY3JpcHQpO1xuICBjb25zdCB2ZWN0b3JzID0gYXdhaXQgZW1iZWQodGV4dHMsIFwiUkVUUklFVkFMX0RPQ1VNRU5UXCIpO1xuICBzdG9yZS5zZXQodmlkZW9JZCwgdGV4dHMubWFwKCh0ZXh0LCBpKSA9PiAoeyB0ZXh0LCBlbWJlZGRpbmc6IHZlY3RvcnNbaV0gfSkpKTtcbiAgcmV0dXJuIHRleHRzLmxlbmd0aDtcbn1cblxuLy8gT3BlbkFJIGVtYmVkZGluZ3MgYXJlIHVuaXQtbGVuZ3RoLCBzbyBkb3QgcHJvZHVjdCA9PSBjb3NpbmUgc2ltaWxhcml0eS5cbmNvbnN0IGRvdCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10pID0+IGEucmVkdWNlKChzLCB2LCBpKSA9PiBzICsgdiAqIGJbaV0sIDApO1xuXG4vLyA0LiBSZXRyaWV2ZSB0b3AtayBjaHVua3MgZm9yIGEgcXVlc3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXRyaWV2ZSh2aWRlb0lkOiBzdHJpbmcsIHF1ZXN0aW9uOiBzdHJpbmcsIGsgPSA1KSB7XG4gIGNvbnN0IGNodW5rcyA9IHN0b3JlLmdldCh2aWRlb0lkKTtcbiAgaWYgKCFjaHVua3MpIHJldHVybiBudWxsO1xuICBjb25zdCBbcV0gPSBhd2FpdCBlbWJlZChbcXVlc3Rpb25dLCBcIlJFVFJJRVZBTF9RVUVSWVwiKTtcbiAgcmV0dXJuIGNodW5rc1xuICAgIC5tYXAoKGMpID0+ICh7IHRleHQ6IGMudGV4dCwgc2NvcmU6IGRvdChxLCBjLmVtYmVkZGluZykgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKVxuICAgIC5zbGljZSgwLCBrKTtcbn1cblxuLy8gNS4gQW5zd2VyIHdpdGggcmV0cmlldmVkIGNvbnRleHRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbnN3ZXIoXG4gIHF1ZXN0aW9uOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1tdLFxuICBoaXN0b3J5OiB7IHJvbGU6IFwidXNlclwiIHwgXCJhc3Npc3RhbnRcIjsgY29udGVudDogc3RyaW5nIH1bXSA9IFtdXG4pIHtcbiAgY29uc3QgaCA9IGhpc3Rvcnkuc2xpY2UoLTYpO1xuICB3aGlsZSAoaC5sZW5ndGggJiYgaFswXS5yb2xlICE9PSBcInVzZXJcIikgaC5zaGlmdCgpO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgIG1vZGVsOiBDSEFUX01PREVMLFxuICAgIGNvbnRlbnRzOiBbXG4gICAgICAuLi5oLm1hcCgobSkgPT4gKHtcbiAgICAgICAgcm9sZTogbS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJtb2RlbFwiIDogXCJ1c2VyXCIsXG4gICAgICAgIHBhcnRzOiBbeyB0ZXh0OiBtLmNvbnRlbnQgfV0sXG4gICAgICB9KSksXG4gICAgICB7IHJvbGU6IFwidXNlclwiLCBwYXJ0czogW3sgdGV4dDogcXVlc3Rpb24gfV0gfSxcbiAgICBdLFxuICAgIGNvbmZpZzoge1xuICAgICAgdGVtcGVyYXR1cmU6IDAuMixcbiAgICAgIHN5c3RlbUluc3RydWN0aW9uOlxuICAgICAgICBcIllvdSBhbnN3ZXIgcXVlc3Rpb25zIGFib3V0IGEgWW91VHViZSB2aWRlbyB1c2luZyBvbmx5IHRoZSB0cmFuc2NyaXB0IGV4Y2VycHRzIGJlbG93LiBcIiArXG4gICAgICAgIFwiSWYgdGhlIGFuc3dlciBpcyBub3QgaW4gdGhlIGV4Y2VycHRzLCBzYXkgdGhlIHZpZGVvIGRvZXNuJ3QgY292ZXIgaXQuIEJlIGNvbmNpc2UuXFxuXFxuXCIgK1xuICAgICAgICBjb250ZXh0Lm1hcCgoYywgaSkgPT4gYFtFeGNlcnB0ICR7aSArIDF9XVxcbiR7Y31gKS5qb2luKFwiXFxuXFxuXCIpLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzLnRleHQgPz8gXCJcIjtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5BSSIsImFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9BUElfS0VZIiwiRU1CRURfTU9ERUwiLCJDSEFUX01PREVMIiwiZyIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIl9fdnN0b3JlIiwiTWFwIiwiY2h1bmtUZXh0IiwidGV4dCIsInNpemUiLCJvdmVybGFwIiwiY2h1bmtzIiwic3RhcnQiLCJsZW5ndGgiLCJlbmQiLCJNYXRoIiwibWluIiwibGFzdFNwYWNlIiwibGFzdEluZGV4T2YiLCJwdXNoIiwic2xpY2UiLCJ0cmltIiwibWF4IiwiZmlsdGVyIiwiQm9vbGVhbiIsImVtYmVkIiwidGV4dHMiLCJ0YXNrVHlwZSIsIm91dCIsImkiLCJyZXMiLCJtb2RlbHMiLCJlbWJlZENvbnRlbnQiLCJtb2RlbCIsImNvbnRlbnRzIiwiY29uZmlnIiwiZW1iZWRkaW5ncyIsIm1hcCIsImQiLCJ2YWx1ZXMiLCJpbmRleFRyYW5zY3JpcHQiLCJ2aWRlb0lkIiwidHJhbnNjcmlwdCIsInZlY3RvcnMiLCJzZXQiLCJlbWJlZGRpbmciLCJkb3QiLCJhIiwiYiIsInJlZHVjZSIsInMiLCJ2IiwicmV0cmlldmUiLCJxdWVzdGlvbiIsImsiLCJnZXQiLCJxIiwiYyIsInNjb3JlIiwic29ydCIsImFuc3dlciIsImNvbnRleHQiLCJoaXN0b3J5IiwiaCIsInJvbGUiLCJzaGlmdCIsImdlbmVyYXRlQ29udGVudCIsIm0iLCJwYXJ0cyIsImNvbnRlbnQiLCJ0ZW1wZXJhdHVyZSIsInN5c3RlbUluc3RydWN0aW9uIiwiam9pbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/rag.ts\n");

/***/ }),

/***/ "(rsc)/./lib/youtube.ts":
/*!************************!*\
  !*** ./lib/youtube.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractVideoId: () => (/* binding */ extractVideoId),\n/* harmony export */   fetchTranscript: () => (/* binding */ fetchTranscript)\n/* harmony export */ });\n/* harmony import */ var youtube_transcript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! youtube-transcript */ \"(rsc)/./node_modules/youtube-transcript/dist/esm/index.js\");\n\n// Accepts watch?v=, youtu.be/, /embed/, /shorts/, /live/ URLs, or a bare 11-char ID.\nfunction extractVideoId(input) {\n    const s = input.trim();\n    if (/^[\\w-]{11}$/.test(s)) return s;\n    try {\n        const u = new URL(s);\n        if (u.hostname === \"youtu.be\") return u.pathname.slice(1, 12) || null;\n        if (u.hostname.endsWith(\"youtube.com\")) {\n            const v = u.searchParams.get(\"v\");\n            if (v) return v;\n            const m = u.pathname.match(/^\\/(embed|shorts|live)\\/([\\w-]{11})/);\n            if (m) return m[2];\n        }\n    } catch  {}\n    return null;\n}\n// Swap this function's body if you use a different transcript API.\n// Whatever you use, return one plain string.\nasync function fetchTranscript(videoId) {\n    const parts = await youtube_transcript__WEBPACK_IMPORTED_MODULE_0__.YoutubeTranscript.fetchTranscript(videoId);\n    return parts.map((p)=>p.text).join(\" \") // join all segments into one text\n    .replace(/&amp;#39;|&#39;/g, \"'\").replace(/&amp;/g, \"&\").replace(/&quot;/g, '\"').replace(/\\s+/g, \" \").trim();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIveW91dHViZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFFdkQscUZBQXFGO0FBQzlFLFNBQVNDLGVBQWVDLEtBQWE7SUFDMUMsTUFBTUMsSUFBSUQsTUFBTUUsSUFBSTtJQUNwQixJQUFJLGNBQWNDLElBQUksQ0FBQ0YsSUFBSSxPQUFPQTtJQUNsQyxJQUFJO1FBQ0YsTUFBTUcsSUFBSSxJQUFJQyxJQUFJSjtRQUNsQixJQUFJRyxFQUFFRSxRQUFRLEtBQUssWUFBWSxPQUFPRixFQUFFRyxRQUFRLENBQUNDLEtBQUssQ0FBQyxHQUFHLE9BQU87UUFDakUsSUFBSUosRUFBRUUsUUFBUSxDQUFDRyxRQUFRLENBQUMsZ0JBQWdCO1lBQ3RDLE1BQU1DLElBQUlOLEVBQUVPLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO1lBQzdCLElBQUlGLEdBQUcsT0FBT0E7WUFDZCxNQUFNRyxJQUFJVCxFQUFFRyxRQUFRLENBQUNPLEtBQUssQ0FBQztZQUMzQixJQUFJRCxHQUFHLE9BQU9BLENBQUMsQ0FBQyxFQUFFO1FBQ3BCO0lBQ0YsRUFBRSxPQUFNLENBQUM7SUFDVCxPQUFPO0FBQ1Q7QUFFQSxtRUFBbUU7QUFDbkUsNkNBQTZDO0FBQ3RDLGVBQWVFLGdCQUFnQkMsT0FBZTtJQUNuRCxNQUFNQyxRQUFRLE1BQU1uQixpRUFBaUJBLENBQUNpQixlQUFlLENBQUNDO0lBQ3RELE9BQU9DLE1BQ0pDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJLEVBQ2pCQyxJQUFJLENBQUMsS0FBSyxrQ0FBa0M7S0FDNUNDLE9BQU8sQ0FBQyxvQkFBb0IsS0FDNUJBLE9BQU8sQ0FBQyxVQUFVLEtBQ2xCQSxPQUFPLENBQUMsV0FBVyxLQUNuQkEsT0FBTyxDQUFDLFFBQVEsS0FDaEJwQixJQUFJO0FBQ1QiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2FyZ2tcXERvd25sb2Fkc1xceXQtcmFnXFx5dC1yYWdcXGxpYlxceW91dHViZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBZb3V0dWJlVHJhbnNjcmlwdCB9IGZyb20gXCJ5b3V0dWJlLXRyYW5zY3JpcHRcIjtcblxuLy8gQWNjZXB0cyB3YXRjaD92PSwgeW91dHUuYmUvLCAvZW1iZWQvLCAvc2hvcnRzLywgL2xpdmUvIFVSTHMsIG9yIGEgYmFyZSAxMS1jaGFyIElELlxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RWaWRlb0lkKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgcyA9IGlucHV0LnRyaW0oKTtcbiAgaWYgKC9eW1xcdy1dezExfSQvLnRlc3QocykpIHJldHVybiBzO1xuICB0cnkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKHMpO1xuICAgIGlmICh1Lmhvc3RuYW1lID09PSBcInlvdXR1LmJlXCIpIHJldHVybiB1LnBhdGhuYW1lLnNsaWNlKDEsIDEyKSB8fCBudWxsO1xuICAgIGlmICh1Lmhvc3RuYW1lLmVuZHNXaXRoKFwieW91dHViZS5jb21cIikpIHtcbiAgICAgIGNvbnN0IHYgPSB1LnNlYXJjaFBhcmFtcy5nZXQoXCJ2XCIpO1xuICAgICAgaWYgKHYpIHJldHVybiB2O1xuICAgICAgY29uc3QgbSA9IHUucGF0aG5hbWUubWF0Y2goL15cXC8oZW1iZWR8c2hvcnRzfGxpdmUpXFwvKFtcXHctXXsxMX0pLyk7XG4gICAgICBpZiAobSkgcmV0dXJuIG1bMl07XG4gICAgfVxuICB9IGNhdGNoIHt9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBTd2FwIHRoaXMgZnVuY3Rpb24ncyBib2R5IGlmIHlvdSB1c2UgYSBkaWZmZXJlbnQgdHJhbnNjcmlwdCBBUEkuXG4vLyBXaGF0ZXZlciB5b3UgdXNlLCByZXR1cm4gb25lIHBsYWluIHN0cmluZy5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYW5zY3JpcHQodmlkZW9JZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcGFydHMgPSBhd2FpdCBZb3V0dWJlVHJhbnNjcmlwdC5mZXRjaFRyYW5zY3JpcHQodmlkZW9JZCk7XG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHApID0+IHAudGV4dClcbiAgICAuam9pbihcIiBcIikgLy8gam9pbiBhbGwgc2VnbWVudHMgaW50byBvbmUgdGV4dFxuICAgIC5yZXBsYWNlKC8mYW1wOyMzOTt8JiMzOTsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuIl0sIm5hbWVzIjpbIllvdXR1YmVUcmFuc2NyaXB0IiwiZXh0cmFjdFZpZGVvSWQiLCJpbnB1dCIsInMiLCJ0cmltIiwidGVzdCIsInUiLCJVUkwiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwic2xpY2UiLCJlbmRzV2l0aCIsInYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJtIiwibWF0Y2giLCJmZXRjaFRyYW5zY3JpcHQiLCJ2aWRlb0lkIiwicGFydHMiLCJtYXAiLCJwIiwidGV4dCIsImpvaW4iLCJyZXBsYWNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/youtube.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fingest%2Froute&page=%2Fapi%2Fingest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fingest%2Froute.ts&appDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fingest%2Froute&page=%2Fapi%2Fingest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fingest%2Froute.ts&appDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(rsc)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(rsc)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/shared/lib/router/utils/app-paths */ \"next/dist/shared/lib/router/utils/app-paths\");\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/base-http/node */ \"(rsc)/./node_modules/next/dist/server/base-http/node.js\");\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/web/spec-extension/adapters/next-request */ \"(rsc)/./node_modules/next/dist/server/web/spec-extension/adapters/next-request.js\");\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(rsc)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/server/instrumentation/utils */ \"(rsc)/./node_modules/next/dist/server/instrumentation/utils.js\");\n/* harmony import */ var next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/server/send-response */ \"(rsc)/./node_modules/next/dist/server/send-response.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(rsc)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dist/server/lib/cache-control */ \"(rsc)/./node_modules/next/dist/server/lib/cache-control.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dist/lib/constants */ \"(rsc)/./node_modules/next/dist/lib/constants.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/shared/lib/no-fallback-error.external */ \"next/dist/shared/lib/no-fallback-error.external\");\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/server/response-cache */ \"(rsc)/./node_modules/next/dist/server/response-cache/index.js\");\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var C_Users_gargk_Downloads_yt_rag_yt_rag_app_api_ingest_route_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app/api/ingest/route.ts */ \"(rsc)/./app/api/ingest/route.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ingest/route\",\n        pathname: \"/api/ingest\",\n        filename: \"route\",\n        bundlePath: \"app/api/ingest/route\"\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    resolvedPagePath: \"C:\\\\Users\\\\gargk\\\\Downloads\\\\yt-rag\\\\yt-rag\\\\app\\\\api\\\\ingest\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gargk_Downloads_yt_rag_yt_rag_app_api_ingest_route_ts__WEBPACK_IMPORTED_MODULE_16__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\nasync function handler(req, res, ctx) {\n    var _nextConfig_experimental;\n    let srcPage = \"/api/ingest/route\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {} else if (srcPage === '/index') {\n        // we always normalize /index specifically\n        srcPage = '/';\n    }\n    const multiZoneDraftMode = false;\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage,\n        multiZoneDraftMode\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return null;\n    }\n    const { buildId, params, nextConfig, isDraftMode, prerenderManifest, routerServerContext, isOnDemandRevalidate, revalidateOnlyGenerated, resolvedPathname } = prepareResult;\n    const normalizedSrcPage = (0,next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__.normalizeAppPath)(srcPage);\n    let isIsr = Boolean(prerenderManifest.dynamicRoutes[normalizedSrcPage] || prerenderManifest.routes[resolvedPathname]);\n    if (isIsr && !isDraftMode) {\n        const isPrerendered = Boolean(prerenderManifest.routes[resolvedPathname]);\n        const prerenderInfo = prerenderManifest.dynamicRoutes[normalizedSrcPage];\n        if (prerenderInfo) {\n            if (prerenderInfo.fallback === false && !isPrerendered) {\n                throw new next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError();\n            }\n        }\n    }\n    let cacheKey = null;\n    if (isIsr && !routeModule.isDev && !isDraftMode) {\n        cacheKey = resolvedPathname;\n        // ensure /index and / is normalized to one key\n        cacheKey = cacheKey === '/index' ? '/' : cacheKey;\n    }\n    const supportsDynamicResponse = // If we're in development, we always support dynamic HTML\n    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports\n    // dynamic HTML.\n    !isIsr;\n    // This is a revalidation request if the request is for a static\n    // page and it is not being resumed from a postponed render and\n    // it is not a dynamic RSC request then it is a revalidation\n    // request.\n    const isRevalidate = isIsr && !supportsDynamicResponse;\n    const method = req.method || 'GET';\n    const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();\n    const activeSpan = tracer.getActiveScopeSpan();\n    const context = {\n        params,\n        prerenderManifest,\n        renderOpts: {\n            experimental: {\n                cacheComponents: Boolean(nextConfig.experimental.cacheComponents),\n                authInterrupts: Boolean(nextConfig.experimental.authInterrupts)\n            },\n            supportsDynamicResponse,\n            incrementalCache: (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'incrementalCache'),\n            cacheLifeProfiles: (_nextConfig_experimental = nextConfig.experimental) == null ? void 0 : _nextConfig_experimental.cacheLife,\n            isRevalidate,\n            waitUntil: ctx.waitUntil,\n            onClose: (cb)=>{\n                res.on('close', cb);\n            },\n            onAfterTaskError: undefined,\n            onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext)\n        },\n        sharedContext: {\n            buildId\n        }\n    };\n    const nodeNextReq = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextRequest(req);\n    const nodeNextRes = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextResponse(res);\n    const nextReq = next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.NextRequestAdapter.fromNodeNextRequest(nodeNextReq, (0,next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.signalFromNodeResponse)(res));\n    try {\n        const invokeRouteModule = async (span)=>{\n            return routeModule.handle(nextReq, context).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${req.url}`);\n                }\n            });\n        };\n        const handleResponse = async (currentSpan)=>{\n            var _cacheEntry_value;\n            const responseGenerator = async ({ previousCacheEntry })=>{\n                try {\n                    if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {\n                        res.statusCode = 404;\n                        // on-demand revalidate always sets this header\n                        res.setHeader('x-nextjs-cache', 'REVALIDATED');\n                        res.end('This page could not be found');\n                        return null;\n                    }\n                    const response = await invokeRouteModule(currentSpan);\n                    req.fetchMetrics = context.renderOpts.fetchMetrics;\n                    let pendingWaitUntil = context.renderOpts.pendingWaitUntil;\n                    // Attempt using provided waitUntil if available\n                    // if it's not we fallback to sendResponse's handling\n                    if (pendingWaitUntil) {\n                        if (ctx.waitUntil) {\n                            ctx.waitUntil(pendingWaitUntil);\n                            pendingWaitUntil = undefined;\n                        }\n                    }\n                    const cacheTags = context.renderOpts.collectedTags;\n                    // If the request is for a static response, we can cache it so long\n                    // as it's not edge.\n                    if (isIsr) {\n                        const blob = await response.blob();\n                        // Copy the headers from the response.\n                        const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.toNodeOutgoingHttpHeaders)(response.headers);\n                        if (cacheTags) {\n                            headers[next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER] = cacheTags;\n                        }\n                        if (!headers['content-type'] && blob.type) {\n                            headers['content-type'] = blob.type;\n                        }\n                        const revalidate = typeof context.renderOpts.collectedRevalidate === 'undefined' || context.renderOpts.collectedRevalidate >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? false : context.renderOpts.collectedRevalidate;\n                        const expire = typeof context.renderOpts.collectedExpire === 'undefined' || context.renderOpts.collectedExpire >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? undefined : context.renderOpts.collectedExpire;\n                        // Create the cache entry for the response.\n                        const cacheEntry = {\n                            value: {\n                                kind: next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE,\n                                status: response.status,\n                                body: Buffer.from(await blob.arrayBuffer()),\n                                headers\n                            },\n                            cacheControl: {\n                                revalidate,\n                                expire\n                            }\n                        };\n                        return cacheEntry;\n                    } else {\n                        // send response without caching if not ISR\n                        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, response, context.renderOpts.pendingWaitUntil);\n                        return null;\n                    }\n                } catch (err) {\n                    // if this is a background revalidate we need to report\n                    // the request error here as it won't be bubbled\n                    if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {\n                        await routeModule.onRequestError(req, err, {\n                            routerKind: 'App Router',\n                            routePath: srcPage,\n                            routeType: 'route',\n                            revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                                isRevalidate,\n                                isOnDemandRevalidate\n                            })\n                        }, routerServerContext);\n                    }\n                    throw err;\n                }\n            };\n            const cacheEntry = await routeModule.handleResponse({\n                req,\n                nextConfig,\n                cacheKey,\n                routeKind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n                isFallback: false,\n                prerenderManifest,\n                isRoutePPREnabled: false,\n                isOnDemandRevalidate,\n                revalidateOnlyGenerated,\n                responseGenerator,\n                waitUntil: ctx.waitUntil\n            });\n            // we don't create a cacheEntry for ISR\n            if (!isIsr) {\n                return null;\n            }\n            if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE) {\n                var _cacheEntry_value1;\n                throw Object.defineProperty(new Error(`Invariant: app-route received invalid cache entry ${cacheEntry == null ? void 0 : (_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), \"__NEXT_ERROR_CODE\", {\n                    value: \"E701\",\n                    enumerable: false,\n                    configurable: true\n                });\n            }\n            if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode')) {\n                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');\n            }\n            // Draft mode should never be cached\n            if (isDraftMode) {\n                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');\n            }\n            const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.fromNodeOutgoingHttpHeaders)(cacheEntry.value.headers);\n            if (!((0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isIsr)) {\n                headers.delete(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER);\n            }\n            // If cache control is already set on the response we don't\n            // override it to allow users to customize it via next.config\n            if (cacheEntry.cacheControl && !res.getHeader('Cache-Control') && !headers.get('Cache-Control')) {\n                headers.set('Cache-Control', (0,next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__.getCacheControlHeader)(cacheEntry.cacheControl));\n            }\n            await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(cacheEntry.value.body, {\n                headers,\n                status: cacheEntry.value.status || 200\n            }));\n            return null;\n        };\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await handleResponse(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${req.url}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, handleResponse));\n        }\n    } catch (err) {\n        if (!(err instanceof next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError)) {\n            await routeModule.onRequestError(req, err, {\n                routerKind: 'App Router',\n                routePath: normalizedSrcPage,\n                routeType: 'route',\n                revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                    isRevalidate,\n                    isOnDemandRevalidate\n                })\n            });\n        }\n        // rethrow so that we can handle serving error page\n        // If this is during static generation, throw the error again.\n        if (isIsr) throw err;\n        // Otherwise, send a 500 response.\n        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(null, {\n            status: 500\n        }));\n        return null;\n    }\n}\n\n//# sourceMappingURL=app-route.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpbmdlc3QlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmluZ2VzdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmluZ2VzdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnYXJnayU1Q0Rvd25sb2FkcyU1Q3l0LXJhZyU1Q3l0LXJhZyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZ2FyZ2slNUNEb3dubG9hZHMlNUN5dC1yYWclNUN5dC1yYWcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QmaXNHbG9iYWxOb3RGb3VuZEVuYWJsZWQ9ISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNkO0FBQ1M7QUFDTztBQUNLO0FBQ21DO0FBQ2pEO0FBQ087QUFDZjtBQUNzQztBQUN6QjtBQUNNO0FBQ0M7QUFDaEI7QUFDa0M7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFvQyxJQUFJLENBQUU7QUFDdkQsd0JBQXdCLE1BQXVDO0FBQy9EO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFB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LGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkVBQTZFLGdGQUFjO0FBQzNGLGlDQUFpQyxRQUFRLEVBQUUsUUFBUTtBQUNuRCwwQkFBMEIsdUVBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxNQUFNO0FBQ04sNkJBQTZCLDZGQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJGQUFtQjtBQUNyRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2RUFBWTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgeyBnZXRSZXF1ZXN0TWV0YSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JlcXVlc3QtbWV0YVwiO1xuaW1wb3J0IHsgZ2V0VHJhY2VyLCBTcGFuS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS90cmFjZXJcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZUFwcFBhdGggfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2FwcC1wYXRoc1wiO1xuaW1wb3J0IHsgTm9kZU5leHRSZXF1ZXN0LCBOb2RlTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYmFzZS1odHRwL25vZGVcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0QWRhcHRlciwgc2lnbmFsRnJvbU5vZGVSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9hZGFwdGVycy9uZXh0LXJlcXVlc3RcIjtcbmltcG9ydCB7IEJhc2VTZXJ2ZXJTcGFuIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3RyYWNlL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0UmV2YWxpZGF0ZVJlYXNvbiB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2luc3RydW1lbnRhdGlvbi91dGlsc1wiO1xuaW1wb3J0IHsgc2VuZFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvc2VuZC1yZXNwb25zZVwiO1xuaW1wb3J0IHsgZnJvbU5vZGVPdXRnb2luZ0h0dHBIZWFkZXJzLCB0b05vZGVPdXRnb2luZ0h0dHBIZWFkZXJzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRDYWNoZUNvbnRyb2xIZWFkZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvY2FjaGUtY29udHJvbFwiO1xuaW1wb3J0IHsgSU5GSU5JVEVfQ0FDSEUsIE5FWFRfQ0FDSEVfVEFHU19IRUFERVIgfSBmcm9tIFwibmV4dC9kaXN0L2xpYi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5vRmFsbGJhY2tFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9uby1mYWxsYmFjay1lcnJvci5leHRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FjaGVkUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcmVzcG9uc2UtY2FjaGVcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxnYXJna1xcXFxEb3dubG9hZHNcXFxceXQtcmFnXFxcXHl0LXJhZ1xcXFxhcHBcXFxcYXBpXFxcXGluZ2VzdFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaW5nZXN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaW5nZXN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9pbmdlc3Qvcm91dGVcIlxuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZ2FyZ2tcXFxcRG93bmxvYWRzXFxcXHl0LXJhZ1xcXFx5dC1yYWdcXFxcYXBwXFxcXGFwaVxcXFxpbmdlc3RcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcywgY3R4KSB7XG4gICAgdmFyIF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbDtcbiAgICBsZXQgc3JjUGFnZSA9IFwiL2FwaS9pbmdlc3Qvcm91dGVcIjtcbiAgICAvLyB0dXJib3BhY2sgZG9lc24ndCBub3JtYWxpemUgYC9pbmRleGAgaW4gdGhlIHBhZ2UgbmFtZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gdG8gcHJvY2VzcyBkeW5hbWljIHJvdXRlcyBwcm9wZXJseVxuICAgIC8vIFRPRE86IGZpeCB0dXJib3BhY2sgcHJvdmlkaW5nIGRpZmZlcmluZyB2YWx1ZSBmcm9tIHdlYnBhY2tcbiAgICBpZiAocHJvY2Vzcy5lbnYuVFVSQk9QQUNLKSB7XG4gICAgICAgIHNyY1BhZ2UgPSBzcmNQYWdlLnJlcGxhY2UoL1xcL2luZGV4JC8sICcnKSB8fCAnLyc7XG4gICAgfSBlbHNlIGlmIChzcmNQYWdlID09PSAnL2luZGV4Jykge1xuICAgICAgICAvLyB3ZSBhbHdheXMgbm9ybWFsaXplIC9pbmRleCBzcGVjaWZpY2FsbHlcbiAgICAgICAgc3JjUGFnZSA9ICcvJztcbiAgICB9XG4gICAgY29uc3QgbXVsdGlab25lRHJhZnRNb2RlID0gcHJvY2Vzcy5lbnYuX19ORVhUX01VTFRJX1pPTkVfRFJBRlRfTU9ERTtcbiAgICBjb25zdCBwcmVwYXJlUmVzdWx0ID0gYXdhaXQgcm91dGVNb2R1bGUucHJlcGFyZShyZXEsIHJlcywge1xuICAgICAgICBzcmNQYWdlLFxuICAgICAgICBtdWx0aVpvbmVEcmFmdE1vZGVcbiAgICB9KTtcbiAgICBpZiAoIXByZXBhcmVSZXN1bHQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICAgIHJlcy5lbmQoJ0JhZCBSZXF1ZXN0Jyk7XG4gICAgICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgYnVpbGRJZCwgcGFyYW1zLCBuZXh0Q29uZmlnLCBpc0RyYWZ0TW9kZSwgcHJlcmVuZGVyTWFuaWZlc3QsIHJvdXRlclNlcnZlckNvbnRleHQsIGlzT25EZW1hbmRSZXZhbGlkYXRlLCByZXZhbGlkYXRlT25seUdlbmVyYXRlZCwgcmVzb2x2ZWRQYXRobmFtZSB9ID0gcHJlcGFyZVJlc3VsdDtcbiAgICBjb25zdCBub3JtYWxpemVkU3JjUGFnZSA9IG5vcm1hbGl6ZUFwcFBhdGgoc3JjUGFnZSk7XG4gICAgbGV0IGlzSXNyID0gQm9vbGVhbihwcmVyZW5kZXJNYW5pZmVzdC5keW5hbWljUm91dGVzW25vcm1hbGl6ZWRTcmNQYWdlXSB8fCBwcmVyZW5kZXJNYW5pZmVzdC5yb3V0ZXNbcmVzb2x2ZWRQYXRobmFtZV0pO1xuICAgIGlmIChpc0lzciAmJiAhaXNEcmFmdE1vZGUpIHtcbiAgICAgICAgY29uc3QgaXNQcmVyZW5kZXJlZCA9IEJvb2xlYW4ocHJlcmVuZGVyTWFuaWZlc3Qucm91dGVzW3Jlc29sdmVkUGF0aG5hbWVdKTtcbiAgICAgICAgY29uc3QgcHJlcmVuZGVySW5mbyA9IHByZXJlbmRlck1hbmlmZXN0LmR5bmFtaWNSb3V0ZXNbbm9ybWFsaXplZFNyY1BhZ2VdO1xuICAgICAgICBpZiAocHJlcmVuZGVySW5mbykge1xuICAgICAgICAgICAgaWYgKHByZXJlbmRlckluZm8uZmFsbGJhY2sgPT09IGZhbHNlICYmICFpc1ByZXJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vRmFsbGJhY2tFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjYWNoZUtleSA9IG51bGw7XG4gICAgaWYgKGlzSXNyICYmICFyb3V0ZU1vZHVsZS5pc0RldiAmJiAhaXNEcmFmdE1vZGUpIHtcbiAgICAgICAgY2FjaGVLZXkgPSByZXNvbHZlZFBhdGhuYW1lO1xuICAgICAgICAvLyBlbnN1cmUgL2luZGV4IGFuZCAvIGlzIG5vcm1hbGl6ZWQgdG8gb25lIGtleVxuICAgICAgICBjYWNoZUtleSA9IGNhY2hlS2V5ID09PSAnL2luZGV4JyA/ICcvJyA6IGNhY2hlS2V5O1xuICAgIH1cbiAgICBjb25zdCBzdXBwb3J0c0R5bmFtaWNSZXNwb25zZSA9IC8vIElmIHdlJ3JlIGluIGRldmVsb3BtZW50LCB3ZSBhbHdheXMgc3VwcG9ydCBkeW5hbWljIEhUTUxcbiAgICByb3V0ZU1vZHVsZS5pc0RldiA9PT0gdHJ1ZSB8fCAvLyBJZiB0aGlzIGlzIG5vdCBTU0cgb3IgZG9lcyBub3QgaGF2ZSBzdGF0aWMgcGF0aHMsIHRoZW4gaXQgc3VwcG9ydHNcbiAgICAvLyBkeW5hbWljIEhUTUwuXG4gICAgIWlzSXNyO1xuICAgIC8vIFRoaXMgaXMgYSByZXZhbGlkYXRpb24gcmVxdWVzdCBpZiB0aGUgcmVxdWVzdCBpcyBmb3IgYSBzdGF0aWNcbiAgICAvLyBwYWdlIGFuZCBpdCBpcyBub3QgYmVpbmcgcmVzdW1lZCBmcm9tIGEgcG9zdHBvbmVkIHJlbmRlciBhbmRcbiAgICAvLyBpdCBpcyBub3QgYSBkeW5hbWljIFJTQyByZXF1ZXN0IHRoZW4gaXQgaXMgYSByZXZhbGlkYXRpb25cbiAgICAvLyByZXF1ZXN0LlxuICAgIGNvbnN0IGlzUmV2YWxpZGF0ZSA9IGlzSXNyICYmICFzdXBwb3J0c0R5bmFtaWNSZXNwb25zZTtcbiAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kIHx8ICdHRVQnO1xuICAgIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpO1xuICAgIGNvbnN0IGFjdGl2ZVNwYW4gPSB0cmFjZXIuZ2V0QWN0aXZlU2NvcGVTcGFuKCk7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBwcmVyZW5kZXJNYW5pZmVzdCxcbiAgICAgICAgcmVuZGVyT3B0czoge1xuICAgICAgICAgICAgZXhwZXJpbWVudGFsOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVDb21wb25lbnRzOiBCb29sZWFuKG5leHRDb25maWcuZXhwZXJpbWVudGFsLmNhY2hlQ29tcG9uZW50cyksXG4gICAgICAgICAgICAgICAgYXV0aEludGVycnVwdHM6IEJvb2xlYW4obmV4dENvbmZpZy5leHBlcmltZW50YWwuYXV0aEludGVycnVwdHMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VwcG9ydHNEeW5hbWljUmVzcG9uc2UsXG4gICAgICAgICAgICBpbmNyZW1lbnRhbENhY2hlOiBnZXRSZXF1ZXN0TWV0YShyZXEsICdpbmNyZW1lbnRhbENhY2hlJyksXG4gICAgICAgICAgICBjYWNoZUxpZmVQcm9maWxlczogKF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbCA9IG5leHRDb25maWcuZXhwZXJpbWVudGFsKSA9PSBudWxsID8gdm9pZCAwIDogX25leHRDb25maWdfZXhwZXJpbWVudGFsLmNhY2hlTGlmZSxcbiAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgIHdhaXRVbnRpbDogY3R4LndhaXRVbnRpbCxcbiAgICAgICAgICAgIG9uQ2xvc2U6IChjYik9PntcbiAgICAgICAgICAgICAgICByZXMub24oJ2Nsb3NlJywgY2IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQWZ0ZXJUYXNrRXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uSW5zdHJ1bWVudGF0aW9uUmVxdWVzdEVycm9yOiAoZXJyb3IsIF9yZXF1ZXN0LCBlcnJvckNvbnRleHQpPT5yb3V0ZU1vZHVsZS5vblJlcXVlc3RFcnJvcihyZXEsIGVycm9yLCBlcnJvckNvbnRleHQsIHJvdXRlclNlcnZlckNvbnRleHQpXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXJlZENvbnRleHQ6IHtcbiAgICAgICAgICAgIGJ1aWxkSWRcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgbm9kZU5leHRSZXEgPSBuZXcgTm9kZU5leHRSZXF1ZXN0KHJlcSk7XG4gICAgY29uc3Qgbm9kZU5leHRSZXMgPSBuZXcgTm9kZU5leHRSZXNwb25zZShyZXMpO1xuICAgIGNvbnN0IG5leHRSZXEgPSBOZXh0UmVxdWVzdEFkYXB0ZXIuZnJvbU5vZGVOZXh0UmVxdWVzdChub2RlTmV4dFJlcSwgc2lnbmFsRnJvbU5vZGVSZXNwb25zZShyZXMpKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpbnZva2VSb3V0ZU1vZHVsZSA9IGFzeW5jIChzcGFuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlTW9kdWxlLmhhbmRsZShuZXh0UmVxLCBjb250ZXh0KS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKCFzcGFuKSByZXR1cm47XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHAuc3RhdHVzX2NvZGUnOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgJ25leHQucnNjJzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByb290U3BhbkF0dHJpYnV0ZXMgPSB0cmFjZXIuZ2V0Um9vdFNwYW5BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgLy8gV2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGF0dHJpYnV0ZXMsIHByb2JhYmx5IE9URUwgaXMgbm90IGVuYWJsZWRcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3RTcGFuQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnNwYW5fdHlwZScpICE9PSBCYXNlU2VydmVyU3Bhbi5oYW5kbGVSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5leHBlY3RlZCByb290IHNwYW4gdHlwZSAnJHtyb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnNwYW5fdHlwZScpfScuIFBsZWFzZSByZXBvcnQgdGhpcyBOZXh0LmpzIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qc2ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gcm9vdFNwYW5BdHRyaWJ1dGVzLmdldCgnbmV4dC5yb3V0ZScpO1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7bWV0aG9kfSAke3JvdXRlfWA7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbmV4dC5yb3V0ZSc6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHAucm91dGUnOiByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXh0LnNwYW5fbmFtZSc6IG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udXBkYXRlTmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnVwZGF0ZU5hbWUoYCR7bWV0aG9kfSAke3JlcS51cmx9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gYXN5bmMgKGN1cnJlbnRTcGFuKT0+e1xuICAgICAgICAgICAgdmFyIF9jYWNoZUVudHJ5X3ZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VHZW5lcmF0b3IgPSBhc3luYyAoeyBwcmV2aW91c0NhY2hlRW50cnkgfSk9PntcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFJlcXVlc3RNZXRhKHJlcSwgJ21pbmltYWxNb2RlJykgJiYgaXNPbkRlbWFuZFJldmFsaWRhdGUgJiYgcmV2YWxpZGF0ZU9ubHlHZW5lcmF0ZWQgJiYgIXByZXZpb3VzQ2FjaGVFbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbi1kZW1hbmQgcmV2YWxpZGF0ZSBhbHdheXMgc2V0cyB0aGlzIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcigneC1uZXh0anMtY2FjaGUnLCAnUkVWQUxJREFURUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lbmQoJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW52b2tlUm91dGVNb2R1bGUoY3VycmVudFNwYW4pO1xuICAgICAgICAgICAgICAgICAgICByZXEuZmV0Y2hNZXRyaWNzID0gY29udGV4dC5yZW5kZXJPcHRzLmZldGNoTWV0cmljcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlbmRpbmdXYWl0VW50aWwgPSBjb250ZXh0LnJlbmRlck9wdHMucGVuZGluZ1dhaXRVbnRpbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCB1c2luZyBwcm92aWRlZCB3YWl0VW50aWwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IHdlIGZhbGxiYWNrIHRvIHNlbmRSZXNwb25zZSdzIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nV2FpdFVudGlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LndhaXRVbnRpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC53YWl0VW50aWwocGVuZGluZ1dhaXRVbnRpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1dhaXRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZVRhZ3MgPSBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkVGFncztcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaXMgZm9yIGEgc3RhdGljIHJlc3BvbnNlLCB3ZSBjYW4gY2FjaGUgaXQgc28gbG9uZ1xuICAgICAgICAgICAgICAgICAgICAvLyBhcyBpdCdzIG5vdCBlZGdlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJc3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBoZWFkZXJzIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHRvTm9kZU91dGdvaW5nSHR0cEhlYWRlcnMocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVUYWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tORVhUX0NBQ0hFX1RBR1NfSEVBREVSXSA9IGNhY2hlVGFncztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGVyc1snY29udGVudC10eXBlJ10gJiYgYmxvYi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSBibG9iLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZhbGlkYXRlID0gdHlwZW9mIGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRSZXZhbGlkYXRlID09PSAndW5kZWZpbmVkJyB8fCBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkUmV2YWxpZGF0ZSA+PSBJTkZJTklURV9DQUNIRSA/IGZhbHNlIDogY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFJldmFsaWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcmUgPSB0eXBlb2YgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZSA+PSBJTkZJTklURV9DQUNIRSA/IHVuZGVmaW5lZCA6IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRFeHBpcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNhY2hlIGVudHJ5IGZvciB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IENhY2hlZFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBCdWZmZXIuZnJvbShhd2FpdCBibG9iLmFycmF5QnVmZmVyKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZUVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCByZXNwb25zZSB3aXRob3V0IGNhY2hpbmcgaWYgbm90IElTUlxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VuZFJlc3BvbnNlKG5vZGVOZXh0UmVxLCBub2RlTmV4dFJlcywgcmVzcG9uc2UsIGNvbnRleHQucmVuZGVyT3B0cy5wZW5kaW5nV2FpdFVudGlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBiYWNrZ3JvdW5kIHJldmFsaWRhdGUgd2UgbmVlZCB0byByZXBvcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgZXJyb3IgaGVyZSBhcyBpdCB3b24ndCBiZSBidWJibGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0NhY2hlRW50cnkgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZpb3VzQ2FjaGVFbnRyeS5pc1N0YWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZU1vZHVsZS5vblJlcXVlc3RFcnJvcihyZXEsIGVyciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcktpbmQ6ICdBcHAgUm91dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVBhdGg6IHNyY1BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVUeXBlOiAncm91dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGVSZWFzb246IGdldFJldmFsaWRhdGVSZWFzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJvdXRlclNlcnZlckNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyeSA9IGF3YWl0IHJvdXRlTW9kdWxlLmhhbmRsZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgbmV4dENvbmZpZyxcbiAgICAgICAgICAgICAgICBjYWNoZUtleSxcbiAgICAgICAgICAgICAgICByb3V0ZUtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgICAgICAgICAgaXNGYWxsYmFjazogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJlcmVuZGVyTWFuaWZlc3QsXG4gICAgICAgICAgICAgICAgaXNSb3V0ZVBQUkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGVPbmx5R2VuZXJhdGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlR2VuZXJhdG9yLFxuICAgICAgICAgICAgICAgIHdhaXRVbnRpbDogY3R4LndhaXRVbnRpbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBjcmVhdGUgYSBjYWNoZUVudHJ5IGZvciBJU1JcbiAgICAgICAgICAgIGlmICghaXNJc3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoY2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogKF9jYWNoZUVudHJ5X3ZhbHVlID0gY2FjaGVFbnRyeS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jYWNoZUVudHJ5X3ZhbHVlLmtpbmQpICE9PSBDYWNoZWRSb3V0ZUtpbmQuQVBQX1JPVVRFKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jYWNoZUVudHJ5X3ZhbHVlMTtcbiAgICAgICAgICAgICAgICB0aHJvdyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3IEVycm9yKGBJbnZhcmlhbnQ6IGFwcC1yb3V0ZSByZWNlaXZlZCBpbnZhbGlkIGNhY2hlIGVudHJ5ICR7Y2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogKF9jYWNoZUVudHJ5X3ZhbHVlMSA9IGNhY2hlRW50cnkudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfY2FjaGVFbnRyeV92YWx1ZTEua2luZH1gKSwgXCJfX05FWFRfRVJST1JfQ09ERVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkU3MDFcIixcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFnZXRSZXF1ZXN0TWV0YShyZXEsICdtaW5pbWFsTW9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcigneC1uZXh0anMtY2FjaGUnLCBpc09uRGVtYW5kUmV2YWxpZGF0ZSA/ICdSRVZBTElEQVRFRCcgOiBjYWNoZUVudHJ5LmlzTWlzcyA/ICdNSVNTJyA6IGNhY2hlRW50cnkuaXNTdGFsZSA/ICdTVEFMRScgOiAnSElUJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEcmFmdCBtb2RlIHNob3VsZCBuZXZlciBiZSBjYWNoZWRcbiAgICAgICAgICAgIGlmIChpc0RyYWZ0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAncHJpdmF0ZSwgbm8tY2FjaGUsIG5vLXN0b3JlLCBtYXgtYWdlPTAsIG11c3QtcmV2YWxpZGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGZyb21Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhjYWNoZUVudHJ5LnZhbHVlLmhlYWRlcnMpO1xuICAgICAgICAgICAgaWYgKCEoZ2V0UmVxdWVzdE1ldGEocmVxLCAnbWluaW1hbE1vZGUnKSAmJiBpc0lzcikpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmRlbGV0ZShORVhUX0NBQ0hFX1RBR1NfSEVBREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGNhY2hlIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgb24gdGhlIHJlc3BvbnNlIHdlIGRvbid0XG4gICAgICAgICAgICAvLyBvdmVycmlkZSBpdCB0byBhbGxvdyB1c2VycyB0byBjdXN0b21pemUgaXQgdmlhIG5leHQuY29uZmlnXG4gICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5jYWNoZUNvbnRyb2wgJiYgIXJlcy5nZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnKSAmJiAhaGVhZGVycy5nZXQoJ0NhY2hlLUNvbnRyb2wnKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdDYWNoZS1Db250cm9sJywgZ2V0Q2FjaGVDb250cm9sSGVhZGVyKGNhY2hlRW50cnkuY2FjaGVDb250cm9sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCBuZXcgUmVzcG9uc2UoY2FjaGVFbnRyeS52YWx1ZS5ib2R5LCB7XG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGNhY2hlRW50cnkudmFsdWUuc3RhdHVzIHx8IDIwMFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRPRE86IGFjdGl2ZVNwYW4gY29kZSBwYXRoIGlzIGZvciB3aGVuIHdyYXBwZWQgYnlcbiAgICAgICAgLy8gbmV4dC1zZXJ2ZXIgY2FuIGJlIHJlbW92ZWQgd2hlbiB0aGlzIGlzIG5vIGxvbmdlciB1c2VkXG4gICAgICAgIGlmIChhY3RpdmVTcGFuKSB7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVSZXNwb25zZShhY3RpdmVTcGFuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRyYWNlci53aXRoUHJvcGFnYXRlZENvbnRleHQocmVxLmhlYWRlcnMsICgpPT50cmFjZXIudHJhY2UoQmFzZVNlcnZlclNwYW4uaGFuZGxlUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgICBzcGFuTmFtZTogYCR7bWV0aG9kfSAke3JlcS51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAga2luZDogU3BhbktpbmQuU0VSVkVSLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC5tZXRob2QnOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC50YXJnZXQnOiByZXEudXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBoYW5kbGVSZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghKGVyciBpbnN0YW5jZW9mIE5vRmFsbGJhY2tFcnJvcikpIHtcbiAgICAgICAgICAgIGF3YWl0IHJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyLCB7XG4gICAgICAgICAgICAgICAgcm91dGVyS2luZDogJ0FwcCBSb3V0ZXInLFxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogbm9ybWFsaXplZFNyY1BhZ2UsXG4gICAgICAgICAgICAgICAgcm91dGVUeXBlOiAncm91dGUnLFxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGVSZWFzb246IGdldFJldmFsaWRhdGVSZWFzb24oe1xuICAgICAgICAgICAgICAgICAgICBpc1JldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldGhyb3cgc28gdGhhdCB3ZSBjYW4gaGFuZGxlIHNlcnZpbmcgZXJyb3IgcGFnZVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGR1cmluZyBzdGF0aWMgZ2VuZXJhdGlvbiwgdGhyb3cgdGhlIGVycm9yIGFnYWluLlxuICAgICAgICBpZiAoaXNJc3IpIHRocm93IGVycjtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZW5kIGEgNTAwIHJlc3BvbnNlLlxuICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgc3RhdHVzOiA1MDBcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fingest%2Froute&page=%2Fapi%2Fingest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fingest%2Froute.ts&appDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "./work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "next/dist/shared/lib/no-fallback-error.external":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external");

/***/ }),

/***/ "next/dist/shared/lib/router/utils/app-paths":
/*!**************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/app-paths" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/app-paths");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/promises":
/*!***************************************!*\
  !*** external "node:stream/promises" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/promises");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@google","vendor-chunks/google-auth-library","vendor-chunks/ws","vendor-chunks/bignumber.js","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/gcp-metadata","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/retry","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/base64-js","vendor-chunks/extend","vendor-chunks/p-retry","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/youtube-transcript"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fingest%2Froute&page=%2Fapi%2Fingest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fingest%2Froute.ts&appDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgargk%5CDownloads%5Cyt-rag%5Cyt-rag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!")));
module.exports = __webpack_exports__;

})();