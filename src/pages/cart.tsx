import React, { useEffect, useState } from 'react';
import styles from './cart.module.scss';

function Cart() {
  const prdPrice = 250;
  const deliveryFee = 50;
  const totalAmount = prdPrice + deliveryFee;
  const onPurchase = (totalAmount) => {
    alert(`${totalAmount}`)
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
        <div className={styles.purchase} onClick={() => onPurchase(totalAmount)}>구매하기</div>
      </section>
  );
}

export default Cart;