import { Controller } from '@nestjs/common';
import {CrudController} from "@nestjsx/crud";
import {Phones} from "../entities/Phones";
import {PhonesService} from "./phones.service";

@Controller('phones')
export class PhonesController implements CrudController<Phones>{
    constructor(public service: PhonesService) {
    }
}
