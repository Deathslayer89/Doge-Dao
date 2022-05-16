import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x6da7283b375eB30c3A01bAeFC8019518029b7257");

(async () => {
  try {
    const amount = 1000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "DDGT in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();