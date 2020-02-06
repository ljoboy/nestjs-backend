import {Controller, UseGuards} from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Phones} from "./entities/Phones";
import {PhonesService} from "./phones.service";
import {AuthGuard} from "@nestjs/passport";

// @UseGuards(AuthGuard('jwt'))
@Crud({model: {
        type: Phones
    }
})
@Controller('phones')
export class PhonesController implements CrudController<Phones>{
    constructor(public service: PhonesService) {
    }
}
