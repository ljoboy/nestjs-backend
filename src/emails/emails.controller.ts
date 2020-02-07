import {Controller, UseGuards} from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Emails} from "./entities/Emails";
import {EmailsService} from "./emails.service";
import {AuthGuard} from "@nestjs/passport";

@UseGuards(AuthGuard())
@Crud({model: {
        type: Emails
    }
})
@Controller('emails')
export class EmailsController implements CrudController<Emails>{
    constructor(public service: EmailsService) {
    }
}
