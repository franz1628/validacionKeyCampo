(function ($) {
    $.fn.validCampoFranz = function (allowedChars) {
        return this.each(function () {
            const $input = $(this);

            function sanitize(value) {
                const escaped = allowedChars.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                const regex = new RegExp(`[^${escaped}]`, "gi");
                return value.replace(regex, "");
            }

            $input.on("input", function () {
                const original = this.value;
                const cleaned = sanitize(original);

                if (original !== cleaned) {
                    this.value = cleaned;
                }
            });

            $input.on("keydown", function (e) {
                const controlKeys = [
                    "Backspace",
                    "Delete",
                    "Tab",
                    "ArrowLeft",
                    "ArrowRight",
                    "Home",
                    "End",
                    "Enter"
                ];

                if (
                    controlKeys.includes(e.key) ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.altKey
                ) {
                    return;
                }

                if (e.key.length === 1 && !allowedChars.toLowerCase().includes(e.key.toLowerCase())) {
                    e.preventDefault();
                }
            });
        });
    };
})(jQuery);