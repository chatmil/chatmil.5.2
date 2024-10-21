"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const settingRoutes_1 = __importDefault(require("./settingRoutes"));
const contactRoutes_1 = __importDefault(require("./contactRoutes"));
const ticketRoutes_1 = __importDefault(require("./ticketRoutes"));
const whatsappRoutes_1 = __importDefault(require("./whatsappRoutes"));
const messageRoutes_1 = __importDefault(require("./messageRoutes"));
const whatsappSessionRoutes_1 = __importDefault(require("./whatsappSessionRoutes"));
const queueRoutes_1 = __importDefault(require("./queueRoutes"));
const companyRoutes_1 = __importDefault(require("./companyRoutes"));
const planRoutes_1 = __importDefault(require("./planRoutes"));
const ticketNoteRoutes_1 = __importDefault(require("./ticketNoteRoutes"));
const quickMessageRoutes_1 = __importDefault(require("./quickMessageRoutes"));
const helpRoutes_1 = __importDefault(require("./helpRoutes"));
const dashboardRoutes_1 = __importDefault(require("./dashboardRoutes"));
const scheduleRoutes_1 = __importDefault(require("./scheduleRoutes"));
const tagRoutes_1 = __importDefault(require("./tagRoutes"));
const contactListRoutes_1 = __importDefault(require("./contactListRoutes"));
const contactListItemRoutes_1 = __importDefault(require("./contactListItemRoutes"));
const campaignRoutes_1 = __importDefault(require("./campaignRoutes"));
const campaignSettingRoutes_1 = __importDefault(require("./campaignSettingRoutes"));
const announcementRoutes_1 = __importDefault(require("./announcementRoutes"));
const chatRoutes_1 = __importDefault(require("./chatRoutes"));
const queueIntegrationRoutes_1 = __importDefault(require("./queueIntegrationRoutes"));
const chatBotRoutes_1 = __importDefault(require("./chatBotRoutes"));
const webHookRoutes_1 = __importDefault(require("./webHookRoutes"));
const subScriptionRoutes_1 = __importDefault(require("./subScriptionRoutes"));
const invoicesRoutes_1 = __importDefault(require("./invoicesRoutes"));
const apiRoutes_1 = __importDefault(require("./apiRoutes"));
const versionRoutes_1 = __importDefault(require("./versionRoutes"));
const filesRoutes_1 = __importDefault(require("./filesRoutes"));
const queueOptionRoutes_1 = __importDefault(require("./queueOptionRoutes"));
const ticketTagRoutes_1 = __importDefault(require("./ticketTagRoutes"));
const apiCompanyRoutes_1 = __importDefault(require("./api/apiCompanyRoutes"));
const apiContactRoutes_1 = __importDefault(require("./api/apiContactRoutes"));
const apiMessageRoutes_1 = __importDefault(require("./api/apiMessageRoutes"));
const companySettingsRoutes_1 = __importDefault(require("./companySettingsRoutes"));
const promptRouter_1 = __importDefault(require("./promptRouter"));
const statisticsRoutes_1 = __importDefault(require("./statisticsRoutes"));
const ScheduledMessagesRoutes_1 = __importDefault(require("./ScheduledMessagesRoutes"));
const flowDefaultRoutes_1 = __importDefault(require("./flowDefaultRoutes"));
const webHookRoutes_2 = __importDefault(require("./webHookRoutes"));
const flowBuilderRoutes_1 = __importDefault(require("./flowBuilderRoutes"));
const flowCampaignRoutes_1 = __importDefault(require("./flowCampaignRoutes"));
const routes = (0, express_1.Router)();
routes.use(userRoutes_1.default);
routes.use("/auth", authRoutes_1.default);
routes.use("/api/messages", apiRoutes_1.default);
routes.use(settingRoutes_1.default);
routes.use(contactRoutes_1.default);
routes.use(ticketRoutes_1.default);
routes.use(whatsappRoutes_1.default);
routes.use(messageRoutes_1.default);
routes.use(messageRoutes_1.default);
routes.use(whatsappSessionRoutes_1.default);
routes.use(queueRoutes_1.default);
routes.use(companyRoutes_1.default);
routes.use(planRoutes_1.default);
routes.use(ticketNoteRoutes_1.default);
routes.use(quickMessageRoutes_1.default);
routes.use(helpRoutes_1.default);
routes.use(dashboardRoutes_1.default);
routes.use(scheduleRoutes_1.default);
routes.use(tagRoutes_1.default);
routes.use(contactListRoutes_1.default);
routes.use(contactListItemRoutes_1.default);
routes.use(campaignRoutes_1.default);
routes.use(campaignSettingRoutes_1.default);
routes.use(announcementRoutes_1.default);
routes.use(chatRoutes_1.default);
routes.use(chatBotRoutes_1.default);
routes.use("/webhook", webHookRoutes_1.default);
routes.use(subScriptionRoutes_1.default);
routes.use(invoicesRoutes_1.default);
routes.use(versionRoutes_1.default);
routes.use(filesRoutes_1.default);
routes.use(queueOptionRoutes_1.default);
routes.use(queueIntegrationRoutes_1.default);
routes.use(ticketTagRoutes_1.default);
routes.use("/api", apiCompanyRoutes_1.default);
routes.use("/api", apiContactRoutes_1.default);
routes.use("/api", apiMessageRoutes_1.default);
routes.use(flowDefaultRoutes_1.default);
routes.use(webHookRoutes_2.default);
routes.use(flowBuilderRoutes_1.default);
routes.use(flowCampaignRoutes_1.default);
routes.use(promptRouter_1.default);
routes.use(statisticsRoutes_1.default);
routes.use(companySettingsRoutes_1.default);
routes.use(ScheduledMessagesRoutes_1.default);
exports.default = routes;
