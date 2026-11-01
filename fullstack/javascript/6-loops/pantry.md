# Build a Smart Pantry Restocker

In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.
You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.
The rawData array contains pipe-separated strings with the format sku|name|qty|expires|zone, where zone is optional.

## User Stories

1. [] You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.
   ◦ Duplicate sku values in the shipment should be ignored.
   ◦ When the zone segment is not provided, it should default to "general".
   ◦ The qty value should be converted to a number.
2. [] You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.
   The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).
   ◦ If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
   ◦ Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
   ◦ Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
3. [] You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.
4. [] You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.
5. [] You should use all of the functions together to process a shipment and log the final grouped result object to the console.
