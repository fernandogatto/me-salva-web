
import { toastr } from 'react-redux-toastr';

const Toast = ({
	showSuccess: (title: string, message: string) => {
		toastr.success(title, message);
	},
	showMessage: (title: string, message: string) => {
		toastr.info(title, message);
	},
	showWarning: (title: string, message: string) => {
		toastr.warning(title, message);
	},
	showError: (title: string, message: string) => {
		toastr.error(title, message);
	}
})

export default Toast;
