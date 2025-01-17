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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const platform_express_1 = require("@nestjs/platform-express");
const fileFilter_helper_1 = require("./helpers/fileFilter.helper");
const multer_1 = require("multer");
const fileNamer_helper_1 = require("./helpers/fileNamer.helper");
let FilesController = exports.FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    findProductByImage(imageName) {
        const path = this.filesService.getStaticProductImage(imageName);
        return path;
    }
    uploadFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('Make sure that the file is in the accepted extentions');
        }
        const secureUrl = `${file.filename}`;
        return {
            secureUrl
        };
    }
};
__decorate([
    (0, common_1.Get)('product/:imageName'),
    __param(0, (0, common_1.Param)('imageName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findProductByImage", null);
__decorate([
    (0, common_1.Post)('product'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: fileFilter_helper_1.fileFilter,
        storage: (0, multer_1.diskStorage)({
            destination: './static/products',
            filename: fileNamer_helper_1.fileNamer,
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadFile", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map