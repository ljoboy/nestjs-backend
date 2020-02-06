import {createParamDecorator} from "@nestjs/common";
import {Users} from "./entities/Users";

const GetUser = createParamDecorator((data, req) : Users => {
    return req.user;
});
