import { Input, Form, Button, InputNumber } from "antd";

import { Book } from "../../apollo/useBooks";

import { Link } from "react-router-dom";

interface Props {

    setBook: (book: Book) => void,

    book: Book,

    handler: () => void,

    initValue: any,

    btnText: string

}

const AppForm = ({ setBook, book, handler, initValue, btnText }: Props) => {

    return (

        <Form
            
            name="basic"

            labelCol={{ span: 3, style: {textAlign: "start"} }}

            wrapperCol={{ span: 21 }}

            style={{ maxWidth: "100%" }}

            initialValues={{ remember: true }}

            autoComplete="off"

        >

            <Form.Item
                
                initialValue={initValue.title}
                
                label="Book Title"
                
                name="title"
                
                rules={[{

                    required: true,

                    message: 'Please input book title!'

                }]}

            >

                <Input
                    
                    size="large"
                    
                    onChange={e => {

                        setBook({ ...book, title: e.target.value });

                    }}
                
                />
                
            </Form.Item>

            <Form.Item
                
                initialValue={initValue.rating}
                
                label="Book Rating"
                
                name="rating"
                
                rules={[{
                
                    required: true,
                    
                    message: 'Please input book rating!'
                
                }]}
                
            >

                <InputNumber
                    
                    size="large"
                
                    onChange={(value: number | null) => {

                        setBook({ ...book, rating: value });

                    }}
                
                />
                
            </Form.Item>

            <Form.Item
                
                initialValue={initValue.author}
                
                label="Book Author"
                
                name="author"
                
                rules={[{

                    required: true,

                    message: 'Please input book author'

                }]}

            >

                <Input
                    
                    size="large"
                
                    onChange={e => {

                        setBook({ ...book, author: e.target.value });

                    }}

                />
                
            </Form.Item>

            <Form.Item
                
                initialValue={initValue.price}
                
                label="Book Price"
                
                name="price"
                
                rules={[{
                
                    required: true,
                    
                    message: 'Please input book price!'
                
                }]}
                
            >

                <InputNumber
                    
                    size="large"

                    onChange={(value: number | null) => {

                        setBook({ ...book, price: value });

                    }}
                
                />
                
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 3, span: 4 }}>

                <Button
                    
                    size="large"
                    
                    type="primary"
                    
                    htmlType="submit"
                    
                    style={{ width: "100%" }}

                    onClick={handler}
                
                >
                    
                    <Link to="/">{btnText}</Link>
                
                </Button>

            </Form.Item>

        </Form>

    );

}

export default AppForm;