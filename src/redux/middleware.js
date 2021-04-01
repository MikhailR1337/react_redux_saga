import { CREATE_POST } from "./types";
import { showAlert } from './actions';

const forbiddenWords = ['fuck', 'spam', 'php'];

export const forbiddenWordsMiddleWare = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                const found = forbiddenWords.filter((word) => action.payload.title.includes(word));
                if (found.length) {
                    return dispatch (showAlert('Вы спамер, мы вас не звали, идите вон!'))
                }
            }
            return next(action)
        }
    }
}