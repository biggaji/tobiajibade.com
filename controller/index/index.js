"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHirePage = exports.index = void 0;
const index = async (req, res) => {
    res.render("pages/index", { page_name: "Tobi Ajibade - Software Engineer" });
};
exports.index = index;
const renderHirePage = async (req, res) => {
    res.render("pages/hire_me", { page_name: "Hire me to work with you..." });
};
exports.renderHirePage = renderHirePage;
