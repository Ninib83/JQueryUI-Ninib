
angular.module("mainModule")
    .component("garbage", {
        templateUrl: "Scripts/Components/Garbage/Garbage.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#garbage-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        var element = ui.draggable.css('position', '');
                        $(this).append(element);

                        $(ui.draggable).fadeOut(1000);
                    }

                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "="
            
        }
    })