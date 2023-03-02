import {Model} from '../entities/Model';
import {Image} from '../entities/Image';
import {User} from '../entities/User';
import {BaseController} from './interfaces/BaseController';

export class ModelController extends BaseController<Model> {
    constructor() {
        super(Model);
    }

    // TODO: 밖에서 user와 image를 model안에 넣어서 model 하나를 받는 구조로 바꿀 것
    async createModel(modelInput: Model, image: Image, user: User) {
        try {
            const model = new Model();
            model.name = modelInput.name;
            model.description = modelInput.description;
            model.inputType = modelInput.inputType;
            model.outputType = modelInput.outputType;
            model.register = user;
            model.image = image;
            await this.repository.save(model);
            return model;
        } catch (e) {
            console.error(e);
        }
    }

    async findModelById(id: number) {
        try {
            return await this.repository
                .createQueryBuilder('model')
                .select()
                .where('id=:id', {id})
                .getOne();
        } catch (e) {
            console.error(e);
        }
    }

    // image update 시 update 가 아니라 기존 image 재 등록
    async findModelByImage(image: Image) {
        try {
            return await this.repository
                .createQueryBuilder('model')
                .select('model')
                .where('imageId=:id', image)
                .getOne();
        } catch (e) {
            console.error(e);
        }
    }
}