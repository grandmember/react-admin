import { useState } from 'react';
import {
    Title,
    useGetList,
    Datagrid,
    TextField as TextFieldReactAdmin,
} from 'react-admin';
import { Card, Button, Toolbar, TextField } from '@mui/material';

const ShoppingTable = () => {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10;
    const sort = { field: 'id', order: 'ASC' };
    const { data, total, isLoading } = useGetList('books', {
        filter: { q: filter },
        pagination: { page, perPage },
        sort,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Title title="Book list" />
            <TextField
                label="Search"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                variant="filled"
                size="small"
                margin="dense"
            />
            <Card>
                <Datagrid data={data} sort={sort}>
                    {/* <TextFieldReactAdmin source="id" />
                    <TextFieldReactAdmin source="title" />
                    <TextFieldReactAdmin source="author" />
                    <TextFieldReactAdmin source="year" /> */}

                    {/* <TextField source="id" />
                    <DateField source="createdAt" />
                    <DateField source="updatedAt" />
                    <TextField source="comment" />
                    <TextField source="productTitle" />
                    <NumberField source="productType" />
                    <NumberField source="productCategory" />
                    <NumberField source="quantity" />
                    <TextField source="productPhotoUrl" />
                    <NumberField source="resalePricePerUnit" /> */}
                </Datagrid>
            </Card>
            <Toolbar>
                {page > 1 && (
                    <Button onClick={() => setPage(page - 1)}>
                        Previous page
                    </Button>
                )}
                {page < (total || 0) / perPage && (
                    <Button onClick={() => setPage(page + 1)}>Next page</Button>
                )}
            </Toolbar>
        </div>
    );
};

export default ShoppingTable;
