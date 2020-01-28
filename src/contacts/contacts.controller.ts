import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud/";
import {Contacts} from "../entities/Contacts";
import {ContactsService} from "./contacts.service";

@Crud({model: {
        type: Contacts
    }
})
@Controller('contacts')
export class ContactsController implements CrudController<Contacts>{
    constructor(public service: ContactsService) {
    }
}
