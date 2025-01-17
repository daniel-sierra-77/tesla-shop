/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findProductByImage(imageName: string): string;
    uploadFile(file: Express.Multer.File): {
        secureUrl: string;
    };
}
