var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$triggers = $('#trigger-menu'),
		$links = $triggers.children( 'li.trigger-li' ),
		current = 0,
		$currPage = $("#home"),
		isAnimating = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$links.each( function() {
			let $link = $( this );
			$link.data( 'originalClassList', $link.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		$( '#dl-menu' ).dlmenu( {
			animationClasses : { in : 'dl-animate-in-2', out : 'dl-animate-out-2' },
			onLinkClick : function( el, ev ) {
				ev.preventDefault();
				nextPage(  el.data('location'), el.data( 'animation' ) );
			}
		} );
		$( '#dl-menu-small' ).dlmenu( {
			animationClasses : { in : 'dl-animate-in-2', out : 'dl-animate-out-2' },
			onLinkClick : function( el, ev ) {
				ev.preventDefault();
				nextPage(  el.data('location'), el.data( 'animation' ) );
			}
		} );
	}

	function nextPage(location, options) {
		if(typeof(options) === "undefined") {
			return false;
		}

		var animation = (options.animation) ? options.animation : options;
		let $nextLocation = $(`#${location}`);

		if($currPage.selector === $nextLocation.selector) {
			return false;
		}

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		var $nextPage = $nextLocation.addClass( 'pt-page-current' ),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				break;
			case 2:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-moveFromTopFade';
				break;
			case 3:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				break;
			case 4:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-moveFromBottomFade';
				break;
		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			onEndAnimation( $currPage, location );
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			onEndAnimation( $nextPage, location );
		} );

		if( !support ) {
			onEndAnimation( $nextPage, location );
		}

		$currPage = $nextPage;
	}

	function onEndAnimation( $inpage, location ) {
		endCurrPage = false;
		endNextPage = false;
		resetPages( $inpage, location);
		isAnimating = false;
	}

	function resetPages($inpage, location) {
		$pages.each( function() {
			var $page = $( this );
			$page.attr( 'class', $page.data( 'originalClassList' ) );
		} );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );

		$links.each( function() {
			let $link = $(this);
			$link.attr( 'class', $link.data( 'originalClassList' ) );
		});
		
		let $currentLi = $(`#${location}-li`);
		$currentLi.attr( 'class', $currentLi.data( 'originalClassList' ) + ' current-li' );
	}

	init();

	return { 
		init : init,
		nextPage : nextPage,
	};

})();