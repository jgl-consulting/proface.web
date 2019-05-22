import SuppliersService from '@/api/suppliers.service';
import SupplierTypesService from '@/api/supplier-types.service';
import CountriesService from '@/api/countries.service';
import ProductsService from '@/api/products.service';
import ProductLinesService from '@/api/product-lines.service';
import PurchaseOrdersService from '@/api/purchase-orders.service';
import PurchaseStatusesService from '@/api/purchase-statuses.service';
import BanksService from '@/api/banks.service';
import SupplierAccountsService from '@/api/supplier-accounts.service';
import ReceptionStatusesService from '@/api/reception-statuses.service';
import PurchaseDetailsService from '@/api/purchase-details.service';
import PurchaseCostsService from '@/api/purchase-costs.service';
import PurchaseInvoicesService from '@/api/purchase-invoices.service';

export default function(ctx, inject) {
  if (!ctx.$axios) {
    console.error( 'Please make sure $axios module is added');
  } else {
    inject('suppliers',  new SuppliersService(ctx));
    inject('supplierTypes', new SupplierTypesService(ctx));
    inject('countries', new CountriesService(ctx));
    inject('products', new ProductsService(ctx));
    inject('productLines', new ProductLinesService(ctx));
    inject('purchaseOrders', new PurchaseOrdersService(ctx));
    inject('purchaseStatuses', new PurchaseStatusesService(ctx));
    inject('banks', new BanksService(ctx));
    inject('supplierAccounts', new SupplierAccountsService(ctx));
    inject('receptionStatuses', new ReceptionStatusesService(ctx));
    inject('purchaseDetails', new PurchaseDetailsService(ctx));
    inject('purchaseCosts', new PurchaseCostsService(ctx));
    inject('purchaseInvoices', new PurchaseInvoicesService(ctx));
  }
}