export function makeEvent(key: string, detail?: unknown): CustomEvent {
    return new CustomEvent(key, {
        bubbles: true,
        composed: true,
        detail,
    })
}