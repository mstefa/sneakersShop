import Models from '../../../db/models/models';

const ModelsResolver = () => {
    return Models.findAll();
}

export default ModelsResolver;