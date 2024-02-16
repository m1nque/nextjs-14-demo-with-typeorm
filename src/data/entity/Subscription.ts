import {BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';
import {type} from 'node:os';

interface Product {
    productNo: string;
    name: string;
    labelName: string;
    quantity: number;
    price: number;
    salePrice: number;
}

@Entity('tb_subscription')
export class Subscription extends BaseEntity {
    @PrimaryColumn({ type: 'varchar' })
    subscription_id: string
    @Column('simple-json')
    product_json: Product
    @Column('simple-array')
    single_product_json: Product[]
}