// config
import { DeliveryClientConfig } from '../config/delivery-client.config';

// interface
import { IDeliveryClient } from './idelivery-client.interface';

// models
import { IContentItem } from '../interfaces/item/icontent-item.interface';

// queries
import { SingleTypeQuery } from '../query/type/single-type-query.class';
import { MultipleTypeQuery } from '../query/type/multiple-type-query.class';
import { SingleItemQuery } from '../query/item/single-item-query.class';
import { MultipleItemQuery } from '../query/item/multiple-item-query.class';
import { TaxonomyQuery } from '../query/taxonomy/taxonomy-query.class';
import { TaxonomiesQuery } from '../query/taxonomy/taxonomies-query.class';
import { ElementQuery } from '../query/element/element-query.class';

// services
import { QueryService } from '../services/query.service';

export class DeliveryClient extends QueryService implements IDeliveryClient {

    /**
    * Delivery client used to fetch data from Kentico Cloud
    * @constructor
    * @param {DeliveryClientConfig} config - The client configuration
    */
    constructor(
        protected config: DeliveryClientConfig
    ) {
        super(config)
    }

    /**
    * Gets query for multiple types
    */
    types(): MultipleTypeQuery {
        return new MultipleTypeQuery(this.config);
    }

    /**
    * Gets query for single type
    * @param {string} typeCodename - Codename of the type to fetch
    */
    type(typeCodename: string): SingleTypeQuery {
        return new SingleTypeQuery(this.config, typeCodename);
    }


    /**
    * Gets query for multiple items
    */
    items<TItem extends IContentItem>(): MultipleItemQuery<TItem> {
        return new MultipleItemQuery<TItem>(this.config);
    }

    /**
    * Gets query for single item
    * @param {string} codename - Codename of item to fetch
    */
    item<TItem extends IContentItem>(codename: string): SingleItemQuery<TItem> {
        return new SingleItemQuery<TItem>(this.config, codename);
    }

    /**
    * Gets query for single taxonomy 
    * @param {string} codename - Codename of taxonomy to fetch
    */
    taxonomy<TItem extends IContentItem>(codename: string): TaxonomyQuery {
        return new TaxonomyQuery(this.config, codename);
    }

    /**
    * Gets query for multiple taxonomies
    */
    taxonomies<TItem extends IContentItem>(): TaxonomiesQuery {
        return new TaxonomiesQuery(this.config);
    }

    /**
     * Gets query for an element within a type
     * @param {string} typeCodename - Codename of the type
     * @param {string} elementCodename - Codename of the element 
     */
    element(typeCodename: string, elementCodename: string): ElementQuery {
        return new ElementQuery(this.config, typeCodename, elementCodename);
    }
}