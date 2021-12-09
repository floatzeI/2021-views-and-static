import apacheError from "./apache-error";

export default () => {
	return apacheError('Not Enabled', 'The requested feature is not enabled on your account. Contact your system administrator to resolve this issue.')
}