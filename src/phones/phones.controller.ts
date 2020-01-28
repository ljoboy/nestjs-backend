import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Phones} from "../entities/Phones";
import {PhonesService} from "./phones.service";

@Crud({model: {
        type: Phones
    }
})
@Controller('phones')
export class PhonesController implements CrudController<Phones>{
    constructor(public service: PhonesService) {
    }
}
