"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const TeleBot = require("telebot");
const configuration_reader_1 = require("configuration-reader");
const path = require("path");
let TelegramService = class TelegramService {
    constructor() {
        const yourFileName = '../../.env';
        const configurationReader = new configuration_reader_1.ConfigurationReader(path.join(__dirname, yourFileName));
        const ourSecretToken = configurationReader.get('BOT_TOKEN');
        const bot = new TeleBot(ourSecretToken);
        bot.on('text', msg => msg.reply.text(`Selber: ${msg.text}`));
        bot.start();
    }
};
TelegramService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map