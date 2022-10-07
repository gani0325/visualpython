define([
], function () {

    var HELP = {
        /** Data Sets */
        'File': {
            name: 'File',
            import: `
            ### hi
            ## gu
            ###### dd
            - d
            `,
s
        },
        'Subset': {
            name: 'Subset',
            import: `
## Subset
Extract subset data with the conditions you want.
* DataFrame : Two-dimensional, size-mutable, potentially heterogeneous tabular data.
* Method
    * iloc : Purely integer-location based indexing for selection by position.
    * loc : Access a group of rows and columns by label(s) or a boolean array.
    * query : Query the columns of a DataFrame with a boolean expression.
* Allocate to : declare variable

### Row/Column Subset View
Select Options
* Indexing : choose row index
* Slicing : input start index, end index
* Condition
    * choose row name, operation, value
    * value : It can be variable or number
    * if you select 'Text' checkbox, value can get string type
`,

        }
    }
    return HELP;
});