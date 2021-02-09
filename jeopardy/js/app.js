/*
i heavily relied on the following sources to help using bootstrap modals with varying modal content since this was my first time doing this:

1. https://getbootstrap.com/docs/5.0/components/modal/
2. https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
3. https://jsbin.com/atawaz/3/edit?html,output

*/

$(() => {

	let score = 0;

	// show and hide modal

});


const giveChoices = (theHint) => {
	let $btnDiv = $('<div id="disabled" class="btn-group" data-toggle="buttons"></div>');
	theHint.answers.forEach = (ans) => {
		let $div = $('<div class="radio">');
		let $label = $('<label class="radio-inline"></label>');
		let $input = $('<input type="radio" name="ans" value="' + ans + '">');
		$label.append($input);
		$label.append(ans);
		$div.append($label);
		$btnDiv.append($div);
	};
	return $btnDiv;
}


const giveHint = (e, $modal) => {
	let clickedButton = $(e.currentTarget);
	let num = parseInt(clickedButton.data('num'));
	let theHint = hints[num];
	window.currentHint = num;
	$modal.find('.modal-title').text(theHint.hint);
	$modal.find('.modal-body').empty().append(giveChoices(theHint));
}



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
