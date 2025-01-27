import { loadTossPayments } from '@tosspayments/payment-sdk';
import { nanoid } from "nanoid";
import styles from './cart.module.scss';

function Cart() {
  const prdPrice = 250;
  const deliveryFee = 50;
  const totalAmount = prdPrice + deliveryFee;

  const payment = () => {
    loadTossPayments(`${import.meta.env.VITE_CLIENT_KEY}`).then(tossPayments => {
      tossPayments.requestPayment('카드', {
        amount: totalAmount,
        orderId: nanoid(),
        orderName: "상품이름",
        customerName: "양가영",
        successUrl: `${import.meta.env.VITE_BASE_URL}/success`,
        failUrl: `${import.meta.env.VITE_BASE_URL}/fail`
      })
          .catch(function (error) {
            if (error.code === 'USER_CANCEL') {
              alert("결제창을 닫았습니다. 다시 시도해주세요")
            } else if (error.code === 'INVALID_CARD_COMPANY') {
              alert("잘못된 카드번호입니다. 다시 시도해주세요.")
            }
          })
    })
  }

  return (
      <section>
        <div className={styles.totalBox}>
          <p className={styles.amount}>
            총 주문금액<span>{prdPrice}원</span>
            <em>+</em>
          </p>
          <p className={styles.amount}>
            배송비 <span>{deliveryFee}원</span>
            <em>=</em>
          </p>
          <p className={styles.totalPrice}>총 결제금액 {totalAmount}원</p>
        </div>
        <div id="payment-widget"/>
        <div className={styles.purchase}  onClick={payment}>구매하기</div>
      </section>
  );
}

export default Cart;