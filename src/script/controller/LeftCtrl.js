module.exports = ($scope, menu, $timeout, $mdSidenav, $log) => {
	$scope.menu = menu;
	$scope.close = function () {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('left').close()
			.then(function () {
				$log.debug("close LEFT is done");
			});
	};

	$scope.selectPage = (page) => {
		return menu.selectPage(page);
	}
	$scope.isSelected = (page) => {
		return menu.isPageSelected(page);
	}
	$scope.isSectionSelected = (section) => {
		var selected = false;
		var openedSection = menu.openedSection;
		if (openedSection === section) {
			selected = true;
		} else if (section.children) {
			section.children.forEach(function (childSection) {
				if (childSection === openedSection) {
					selected = true;
				}
			});
		}
		return selected;
	}
	$scope.isOpen = (section) => {
		return menu.isSectionSelected(section);
	}
	$scope.toggleOpen = (section) => {
		return menu.toggleSelectSection(section);
	}
}