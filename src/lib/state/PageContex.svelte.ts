export const page_context = $state({
    current: "hospitals",
    change() {
        this.current = this.current == "patients" ? "hospitals" : "patients";
    }
})