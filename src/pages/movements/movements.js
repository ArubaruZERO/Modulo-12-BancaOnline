import {getMovements} from "./movements.api";
import {addMovementRows} from "./movements.helpers";
import{mapMovementsFromApiToViewModel} from "./movements.mappers";
import { history } from '../../core/router';
import {onSetValues} from "../../common/helpers/element.helpers"
const params = history.getParams();

if (params.id) {
  getMovements(params.id).then(movements => {
  const viewModelMovements = mapMovementsFromApiToViewModel(movements);
  addMovementRows(viewModelMovements);
    });
}


