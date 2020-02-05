import {Controller, UseGuards} from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Users} from "./entities/Users";
import {UsersService} from "./users.service";
import {AuthGuard} from "@nestjs/passport";

@UseGuards(AuthGuard('jwt'))
@Crud({model: {
        type: Users
    }
})
@Controller('users')
export class UsersController implements CrudController<Users>{
    constructor(public service: UsersService) {
    }

}
