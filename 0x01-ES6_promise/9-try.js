export default function guardrail(mathFunction = (data) => {
    var queue = [];
    try {
        console.log("Ya");
        queue.unshift(data)
        queue.unshift("Guardrail was processed")
        return queue

    } catch (error) {
        console.log("Ya");
        queue.unshift(error)
        queue.unshift("Guardrail was processed")
        throw new Error(queue)
    }
})
