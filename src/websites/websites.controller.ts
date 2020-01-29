import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {WebsitesService} from "./websites.service";
import {Websites} from "../entities/Websites";

@Crud({model: {
        type: Websites
    }
})
@Controller('websites')
export class WebsitesController implements CrudController<Websites>{
    constructor(public service: WebsitesService) {
    }
}
