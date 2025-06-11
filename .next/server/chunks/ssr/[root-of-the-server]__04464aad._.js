module.exports = {

"[project]/.next-internal/server/app/offer/[offerId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/loading.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/app/services/supabase.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = "https://ogxvbjvwbrllggcmfyke.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
const __TURBOPACK__default__export__ = supabase;
}}),
"[project]/app/services/apiOffers.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOfferById": (()=>getOfferById),
    "getOffers": (()=>getOffers),
    "invalidateCache": (()=>invalidateCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/supabase.js [app-rsc] (ecmascript)");
;
// Simple in-memory cache
const cache = {
    data: {},
    timeouts: {},
    // Cache duration in milliseconds (30 minutes default)
    DEFAULT_TTL: 1800000,
    set (key, value, ttl = this.DEFAULT_TTL) {
        this.data[key] = value;
        // Clear any existing timeout
        if (this.timeouts[key]) {
            clearTimeout(this.timeouts[key]);
        }
        // Set expiration timeout
        this.timeouts[key] = setTimeout(()=>{
            delete this.data[key];
            delete this.timeouts[key];
        }, ttl);
        return value;
    },
    get (key) {
        return this.data[key];
    },
    has (key) {
        return key in this.data;
    },
    invalidate (key) {
        delete this.data[key];
        if (this.timeouts[key]) {
            clearTimeout(this.timeouts[key]);
            delete this.timeouts[key];
        }
    },
    invalidateAll () {
        Object.keys(this.timeouts).forEach((key)=>{
            clearTimeout(this.timeouts[key]);
        });
        this.data = {};
        this.timeouts = {};
    }
};
async function getOffers() {
    const cacheKey = "all_offers";
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("offered_course").select("*");
    if (error) {
        console.error("Error fetching offers:", error);
        throw new Error("Failed to fetch offers");
    }
    // Store in cache and return
    return cache.set(cacheKey, data);
}
async function getOfferById(id) {
    const cacheKey = `offer_${id}`;
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("offered_course").select("*").eq("id", id).single();
    if (error) {
        console.error("Error fetching offer:", error);
        throw new Error(`Failed to fetch offer with ID ${id}`);
    }
    // Store in cache and return
    return cache.set(cacheKey, data);
}
function invalidateCache(id = null) {
    if (id) {
        // Invalidate specific offer
        cache.invalidate(`offer_${id}`);
    }
    // Always invalidate the collection caches
    cache.invalidate("all_offers");
}
}}),
"[project]/app/offer/[offerId]/_components/OfferClient.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/offer/[offerId]/_components/OfferClient.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/offer/[offerId]/_components/OfferClient.jsx <module evaluation>", "default");
}}),
"[project]/app/offer/[offerId]/_components/OfferClient.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/offer/[offerId]/_components/OfferClient.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/offer/[offerId]/_components/OfferClient.jsx", "default");
}}),
"[project]/app/offer/[offerId]/_components/OfferClient.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$offer$2f5b$offerId$5d2f$_components$2f$OfferClient$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/offer/[offerId]/_components/OfferClient.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$offer$2f5b$offerId$5d2f$_components$2f$OfferClient$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/offer/[offerId]/_components/OfferClient.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$offer$2f5b$offerId$5d2f$_components$2f$OfferClient$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/offer/[offerId]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OfferPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiOffers.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$offer$2f5b$offerId$5d2f$_components$2f$OfferClient$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/offer/[offerId]/_components/OfferClient.jsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    try {
        const offerId = params.offerId;
        const offer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOfferById"])(parseInt(offerId));
        if (!offer) {
            return {
                title: "შეთავაზება ვერ მოიძებნა",
                description: "მოთხოვნილი შეთავაზება არ არსებობს ან წაშლილია"
            };
        }
        // Extract description from offer text or course details
        const description = offer.text || (Array.isArray(offer.course_details) && offer.course_details.length > 0 ? offer.course_details[0] : "განსაკუთრებული შეთავაზება იდეარუმის აკადემიისგან - ისწავლე ახალი უნარები ფასდაკლებით");
        // Try different image fields that might be used
        const rawImageUrl = offer.image || offer.section_image || offer.course_image || offer.banner_image;
        // Ensure image URL is absolute
        const imageUrl = rawImageUrl?.startsWith("http") ? rawImageUrl : rawImageUrl?.startsWith("/") ? `https://academy.idearoom.ge${rawImageUrl}` : rawImageUrl ? `https://academy.idearoom.ge/${rawImageUrl}` : "https://academy.idearoom.ge/coverweb.webp"; // fallback image
        // Debug log to see what we got
        console.log("Offer metadata debug:", {
            offerId,
            title: offer.title,
            rawImageUrl,
            finalImageUrl: imageUrl,
            hasImage: !!offer.image,
            hasSectionImage: !!offer.section_image,
            hasCourseImage: !!offer.course_image,
            hasBannerImage: !!offer.banner_image
        });
        return {
            title: offer.title,
            description: description,
            openGraph: {
                title: offer.title,
                description: description,
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: offer.title
                    }
                ],
                type: "website",
                locale: "ka_GE",
                url: `https://academy.idearoom.ge/offer/${offerId}`,
                siteName: "იდეარუმის აკადემია"
            },
            twitter: {
                card: "summary_large_image",
                title: offer.title,
                description: description,
                images: [
                    imageUrl
                ]
            },
            robots: {
                follow: true,
                index: true
            }
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "შეთავაზება",
            description: "იდეარუმის აკადემიის შეთავაზებები"
        };
    }
}
// Helper functions for data processing
function processData(data) {
    if (Array.isArray(data)) return data;
    if (data == null) return [];
    if (typeof data === "string") {
        try {
            const trimmedData = data.trim();
            if (trimmedData.startsWith("[") && trimmedData.endsWith("]") || trimmedData.startsWith("{") && trimmedData.endsWith("}")) {
                return JSON.parse(trimmedData);
            }
            return [
                trimmedData
            ];
        } catch (e) {
            console.error("Failed to parse JSON:", e);
            return [];
        }
    }
    return [];
}
function validateSyllabusContent(content) {
    if (!Array.isArray(content)) return [
        String(content)
    ];
    return content.map((item)=>String(item));
}
async function OfferPage({ params, searchParams }) {
    try {
        const offerId = params.offerId;
        const activeTab = searchParams?.tab || "details";
        // Fetch offer data
        const offer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOfferById"])(parseInt(offerId));
        if (!offer) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-[95%] mx-auto px-4 py-10 mt-[128px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white h-[475px] rounded-[20px] p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "შეთავაზება ვერ მოიძებნა"
                    }, void 0, false, {
                        fileName: "[project]/app/offer/[offerId]/page.jsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/offer/[offerId]/page.jsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/offer/[offerId]/page.jsx",
                lineNumber: 130,
                columnNumber: 9
            }, this);
        }
        // Get related offers
        const allOffers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOffers"])();
        const relatedOffers = allOffers.filter((o)=>o.id !== parseInt(offerId)).slice(0, 4);
        // Process syllabus data
        let syllabusItems = [];
        const titles = processData(offer.syllabus_title);
        const contents = processData(offer.syllabus_content);
        if (Array.isArray(titles) && titles.length > 0) {
            syllabusItems = titles.map((title, index)=>{
                let contentArray = [];
                if (Array.isArray(contents) && contents.length > index) {
                    contentArray = validateSyllabusContent(contents[index]);
                }
                return {
                    title: `ლექცია ${index + 1}: ${title}`,
                    content: contentArray
                };
            });
        } else if (Array.isArray(contents) && contents.length > 0) {
            syllabusItems = contents.map((contentArray, index)=>({
                    title: `ლექცია ${index + 1}`,
                    content: validateSyllabusContent(contentArray)
                }));
        }
        if (syllabusItems.length === 0) {
            syllabusItems = [
                {
                    title: "ლექცია 1",
                    content: [
                        "შინაარსი 1",
                        "შინაარსი 2"
                    ]
                }
            ];
        }
        // Process other data
        const course_details = processData(offer.course_details);
        const lecturers = processData(offer.lecturers);
        const lecturers_details = processData(offer.lecturers_details);
        // Ensure start_course has a default value
        if (!offer.start_course) {
            offer.start_course = "მალე დაიწყება";
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$offer$2f5b$offerId$5d2f$_components$2f$OfferClient$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            offer: offer,
            relatedOffers: relatedOffers,
            syllabusItems: syllabusItems,
            course_details: course_details,
            lecturers: lecturers,
            lecturers_details: lecturers_details,
            activeTab: activeTab
        }, void 0, false, {
            fileName: "[project]/app/offer/[offerId]/page.jsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    } catch (error) {
        console.error("Error in OfferPage:", error);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container max-w-[95%] mx-auto px-4 py-10 mt-[128px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white h-[475px] rounded-[20px] p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "შეცდომა მონაცემების ჩატვირთვაში"
                }, void 0, false, {
                    fileName: "[project]/app/offer/[offerId]/page.jsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/offer/[offerId]/page.jsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/offer/[offerId]/page.jsx",
            lineNumber: 200,
            columnNumber: 7
        }, this);
    }
}
async function generateStaticParams() {
    try {
        const offers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOffers"])();
        return offers.map((offer)=>({
                offerId: offer.id.toString()
            }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}
}}),
"[project]/app/offer/[offerId]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/offer/[offerId]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__04464aad._.js.map