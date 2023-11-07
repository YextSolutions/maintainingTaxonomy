export async function specialtiesToCategories(data){

    const changedFields = data.changedFields.fieldNames[0]
    const entityId = data.entityId

    if (changedFields === "taxonomy_relatedSpecialty") {
        var categoryId = findCorrespondingCategory(data.primaryProfile.taxonomy_relatedSpecialty[0])
        var myData = {
            "categoryIds" :[categoryId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }
    return null;
}
