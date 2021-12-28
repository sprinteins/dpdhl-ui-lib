export function makeEvent(key: string, detail: unknown = null): CustomEvent {
    return new CustomEvent(key, {
        bubbles: true,
        composed: true,
        detail,
    })
}