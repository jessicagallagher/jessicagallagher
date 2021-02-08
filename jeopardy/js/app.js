/*
i heavily relied on the following sources to help using bootstrap modals with varying modal content since this was my first time doing this:

1. https://getbootstrap.com/docs/5.0/components/modal/
2. https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
3. https://jsbin.com/atawaz/3/edit?html,output

*/

$(() => {

	let score = 0;

	// show and hide modal
	const showHideModal =
});


const showHideModal = () => {
	$('#myModal').on('show.bs.modal', (e) => {
		giveHint(e, $(e.currentTarget))
	});
};
$('#myModal').on('hidden.bs.modal', () => {
	console.log('hidden');
});
$('.modal-body input:checked').submit() => {
	$('#myModal').modal('toggle');
	return false;
};
